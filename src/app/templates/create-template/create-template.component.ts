import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-template',
  templateUrl: './create-template.component.html',
  styleUrls: ['./create-template.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CreateTemplateComponent {
  options = ['Option 1', 'Option 2', 'Option 3'];
  showFiller: boolean = true;
  durationInSeconds = 4;
  headerData = {
    headerName: 'Integration Properties',
  };
  showProperties: string = 'template-properties';
  public menuCallback: Function;

  @ViewChild('drawer') drawer;


  constructor(private _snackBar: MatSnackBar) {}

  public ngOnInit() {
    this.menuCallback = this.onMenuClick.bind(this);
  }

  onMenuClick(value: any) {
    this.showProperties = value;
  }

  openSnackBar() {
    this._snackBar.open('Template successfully published', 'X', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: this.durationInSeconds * 1000,
    });
  }
}
