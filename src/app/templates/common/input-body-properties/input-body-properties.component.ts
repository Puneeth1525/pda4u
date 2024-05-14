import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RcxFieldSelectionComponent } from '../rcx-field-selection/rcx-field-selection.component';

@Component({
  selector: 'app-input-body-properties',
  templateUrl: './input-body-properties.component.html',
  styleUrls: ['./input-body-properties.component.scss']
})
export class InputBodyPropertiesComponent {
  options = ['String', 'Number', 'Array'];

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(RcxFieldSelectionComponent);
  }
}
