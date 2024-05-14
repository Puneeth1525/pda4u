import { Component } from '@angular/core';

@Component({
  selector: 'app-response-header-properties',
  templateUrl: './response-header-properties.component.html',
  styleUrls: ['./response-header-properties.component.scss']
})
export class ResponseHeaderPropertiesComponent {
  options=["String", "Number", "Array"]
}
