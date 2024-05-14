import { Component } from '@angular/core';

@Component({
  selector: 'app-response-body-properties',
  templateUrl: './response-body-properties.component.html',
  styleUrls: ['./response-body-properties.component.scss'],
})
export class ResponseBodyPropertiesComponent {
  options = ['String', 'Number', 'Array'];
}
