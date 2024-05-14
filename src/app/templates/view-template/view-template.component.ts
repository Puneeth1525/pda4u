import { Component } from '@angular/core';

@Component({
  selector: 'app-view-template',
  templateUrl: './view-template.component.html',
  styleUrls: ['./view-template.component.scss']
})
export class ViewTemplateComponent {
  public menuCallback: Function;
  showProperties: string = 'template-properties';

  onMenuClick(value: any) {
    this.showProperties = value;
    console.log(this.showProperties);
  }
}
