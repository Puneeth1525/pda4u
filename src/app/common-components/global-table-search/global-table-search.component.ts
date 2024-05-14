import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-global-table-search',
  templateUrl: './global-table-search.component.html',
  styleUrls: ['./global-table-search.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GlobalTableSearchComponent {
  @Input() searchPlaceHolder: string = 'Search By Name';
  @Input() widthClass: string = 'Search By Name';
}
