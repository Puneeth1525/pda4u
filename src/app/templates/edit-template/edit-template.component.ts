import { Component, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-template',
  templateUrl: './edit-template.component.html',
  styleUrls: ['./edit-template.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EditTemplateComponent {
  showFiller: boolean = true;
  durationInSeconds = 4;
  public menuCallback: Function;
  showProperties: string = 'template-properties';

  constructor(private _snackBar: MatSnackBar) {}

  public ngOnInit() {
    this.menuCallback = this.onMenuClick.bind(this);
  }

  onMenuClick(value: any) {
    this.showProperties = value;
    console.log(this.showProperties);
  }

  openSnackBar() {
    this._snackBar.open('Template successfully published', 'X', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: this.durationInSeconds * 1000,
    });
  }
}