import { Component, ViewEncapsulation } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'connection-detail',
  templateUrl: './connection-detail.component.html',
  styleUrls: ['./connection-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ConnectionDetailsComponent {
  options: any = ['Select', 'Option1', 'Option2', 'Option3'];
}
