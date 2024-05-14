import { Component, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-connection-table',
  templateUrl: './connections-table.component.html',
  styleUrls: ['./connections-table.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }
export class ConnectionsTableComponent {
  options = ['Option 1', 'Option 2', 'Option 3'];
  dataSource: MatTableDataSource<any>;
  data = [
    { name: 'John Doe', email: 'john@example.com' },
    { name: 'Jane Smith', email: 'jane@example.com' },
    // Add more data rows as needed
  ];
  displayedColumns: string[] = [
    'name',
    'descriptions',
    'rcxprocess',
    'partner',
    'format',
    'modifiedby',
    'status',
    'actions',
  ];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.dataSource = new MatTableDataSource([
      {
        name: 'Template name that is decently long here',
        descriptions: 'description goes here for template with desc...',
        rcxprocess: 'Enrollment',
        partner: 'Hertz Global',
        format: 'Delimited',
        modifiedby: { name: 'John Doe', timestamp: '9 April 2023, 8:15am ' },
        status: 'revision',
      },
      {
        name: 'Template name that is decently long here',
        descriptions: 'description goes here for template with desc...',
        rcxprocess: 'Enrollment',
        partner: 'Hertz Global',
        format: 'Delimited',
        modifiedby: { name: 'John Doe', timestamp: '9 April 2023, 8:15am ' },
        status: 'revision',
      },
      {
        name: 'Template name that is decently long here',
        descriptions: 'description goes here for template with desc...',
        rcxprocess: 'Enrollment',
        partner: 'Hertz Global',
        format: 'Delimited',
        modifiedby: { name: 'John Doe', timestamp: '9 April 2023, 8:15am ' },
        status: 'revision',
      },
      // Add more data rows as needed
    ]);
  }
  viewList() {
    this.router.navigate(['list'], { relativeTo: this.route });
  }
  viewGrid() {
    this.router.navigate(['grid'], { relativeTo: this.route });
  }
  createConnection() {
    this.router.navigate(['connections/create']);
  }
  /** Announce the change in sort state for assistive technology. */
}
