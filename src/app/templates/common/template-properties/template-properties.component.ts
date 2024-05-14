import { Component } from '@angular/core';

@Component({
  selector: 'app-template-properties',
  templateUrl: './template-properties.component.html',
  styleUrls: ['./template-properties.component.scss']
})
export class TemplatePropertiesComponent {
  options = ['String', 'Number', 'Array'];
}
