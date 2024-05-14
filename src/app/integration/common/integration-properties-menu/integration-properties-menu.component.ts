import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-integration-properties-menu',
  templateUrl: './integration-properties-menu.component.html',
  styleUrls: ['./integration-properties-menu.component.scss'],
})
export class IntegrationPropertiesMenuComponent {
  @Input() onMenuClick: Function;
  activeMenuProperties: string = 'integration_properties';
  constructor() {}

  onClickOnMenuSelection(value: string) {
    this.activeMenuProperties = value;
    this.onMenuClick(value);
  }
}
