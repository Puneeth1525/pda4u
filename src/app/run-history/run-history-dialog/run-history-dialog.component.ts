import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-run-history-dialog',
  templateUrl: './run-history-dialog.component.html',
  styleUrls: ['./run-history-dialog.component.scss'],
})
export class RunHistoryDialogComponent {
  constructor(@Inject(DIALOG_DATA) public data: any) {}

  elementDetails: any = [
    {
      label: 'Name',
      value: 'Integration 1 - Full name goes here',
      type: 'text',
    },
    {
      label: 'Run ID',
      value: '345123',
      type: 'text',
    },
    {
      label: 'Input',
      value: 'RCX_Group_Input_file_full Name goes_here2023-06-01.txt',
      type: 'file',
    },
    {
      label: 'Response',
      value: 'RCX_Group_Response_file_full Name goes_here2023-06-01.txt',
      type: 'file',
    },
  ];
}
