import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-integration',
  templateUrl: './create-integration.component.html',
  styleUrls: ['./create-integration.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CreateIntegrationComponent {
  options = ['Option 1', 'Option 2', 'Option 3'];
  durationInSeconds = 4;
  headerData = {
    headerName: 'Integration Properties',
  };
  showProperties: string = 'integration_properties';
  public menuCallback: Function;

  @ViewChild('drawer') drawer;

  constructor(private _snackBar: MatSnackBar) {}

  public ngOnInit() {
    this.menuCallback = this.onMenuClick.bind(this);
  }

  onMenuClick(value: any) {
    console.log('this is called', value);
    this.showProperties = value;
  }

  openSnackBar() {
    this._snackBar.open('Integration successfully published', 'X', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: this.durationInSeconds * 1000,
    });
  }
}
