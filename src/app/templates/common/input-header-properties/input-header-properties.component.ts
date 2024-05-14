import { Component } from '@angular/core';

@Component({
  selector: 'app-input-header-properties',
  templateUrl: './input-header-properties.component.html',
  styleUrls: ['./input-header-properties.component.scss']
})
export class InputHeaderPropertiesComponent {
  options=["String", "Number", "Array"];
}
