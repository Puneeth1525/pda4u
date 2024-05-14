import { Component, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-integration',
  templateUrl: './view-integration.component.html',
  styleUrls: ['./view-integration.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ViewIntegrationComponent {
  options = ['Option 1', 'Option 2', 'Option 3'];
  showProperties: string = 'integration_properties';
  public menuCallback: Function;
  constructor(private _snackBar: MatSnackBar) {}

  headerData = {
    headerName: 'Integration',
    status: 'Published',
    lastUpdateBy: 'John Doe',
    date: '09 Apr 2023',
    time: '8:15 am',
  };

  public ngOnInit() {
    this.menuCallback = this.onMenuClick.bind(this);
  }

  onMenuClick(value: any) {
    console.log('this is called', value);
    this.showProperties = value;
  }
}
