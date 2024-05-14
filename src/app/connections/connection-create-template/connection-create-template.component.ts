import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'connection-create-template',
  templateUrl: './connection-create-template.component.html',
  styleUrls: ['./connection-create-template.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ConnectionCreateTemplateComponent {
  options = ['Option 1', 'Option 2', 'Option 3'];
  connectionType = ['AWS', 'SFTP'];
  selectionConnection = '';
  isCompressionEnabled: any;
  isEncryptionEnabled: any;
  emailFormControl = new FormControl('', [Validators.required]);
  @ViewChild('imgFileInputs') inputElement: ElementRef | undefined;

  onFileSelected() {}
  selectionConnectionValue(e: any) {
    console.log(this.emailFormControl.hasError('required'));
    this.selectionConnection = e;
  }
}
