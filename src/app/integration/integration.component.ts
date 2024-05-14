import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-integration',
  templateUrl: './integration.component.html',
  styleUrls: ['./integration.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class IntegrationComponent {
  options = ['Option 1', 'Option 2', 'Option 3'];
  showListView: boolean = true;

  viewGrid() {
    this.showListView = false;
  }

  viewList() {
    this.showListView = true;
  }
}
