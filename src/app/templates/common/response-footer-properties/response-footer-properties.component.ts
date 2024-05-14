import { Component } from '@angular/core';

@Component({
  selector: 'app-response-footer-properties',
  templateUrl: './response-footer-properties.component.html',
  styleUrls: ['./response-footer-properties.component.scss'],
})
export class ResponseFooterPropertiesComponent {
  options = ['String', 'Number', 'Array'];
}
