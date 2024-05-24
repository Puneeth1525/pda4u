import { MatPaginator } from '@angular/material/paginator';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import {
  Component,
  Input,
  ViewChild,
  AfterViewInit,
  Inject,
  ViewEncapsulation,
  HostBinding,
} from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ExecutionLogDialogComponent } from '../execution-log-dialog/execution-log-dialog.component';
import { Dialog, DIALOG_DATA, DialogModule } from '@angular/cdk/dialog';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss'],
})
export class DynamicTableComponent implements AfterViewInit {
  @Input() displayedColumns: any = [];
  @Input() tableDataSource: any;
  @ViewChild(MatSort) sort: MatSort = new MatSort();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<any>;
  defaultActiveSort: any;

  secondHeader = ['Details Category 1', 'Details Category 2']

  constructor(private _liveAnnouncer: LiveAnnouncer, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
    // this.defaultActiveSort = this.displayedColumns[0];
  }

  isOddRow(index: number): boolean {
    return index % 2 === 0;
  }

  isEvenRow(index: number): boolean {
    return index % 2 !== 0;
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(
      this.tableDataSource
    );
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    // this.displayedColumns = this.tableHeader || this.displayedColumns;
    this.defaultActiveSort = this.displayedColumns[0];
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  edit(row: any): void {
    // Perform edit action for the row
    console.log('Edit:', row);
  }

  delete(row: any): void {
    // Perform delete action for the row
    console.log('Delete:', row);
  }
  getClassName(statusParam: string) {
    return `status-${statusParam.toLowerCase()}`;
  }

  getString(input: String) {
    if (input.includes('_')) {
      let firstString =
        input.split('_')[0].charAt(0).toUpperCase() +
        input.split('_')[0].slice(1);
      let secondString =
        input.split('_')[1].charAt(0).toUpperCase() +
        input.split('_')[1].slice(1);
      return firstString +' '+ secondString;
    } else {
      return `${input.charAt(0).toUpperCase() + input.slice(1)}`;
    }
  }

  transform(value: any) {
    return Array.from(value);
  }

  normalField(item: string) {
    return this.actionField(item)
      ? false
      : this.statusField(item)
      ? false
      : true;
  }

  actionField(item: string) {
    return item === 'actions' ? true : false;
  }

  statusField(item: string) {
    return item === 'status' ? true : false;
  }

  returnFileName(value) {
    if (value && value.length > 21) {
      const truncatedValue = value.substring(0, 9) + '..' + value.substring(value.length - 12);
      return truncatedValue;
    } else if (value) {
      return value;
    } else {
      return '';
    }
  }


  openDialog() {
    const dialogRef = this.dialog.open(ExecutionLogDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  formatLabel(totalMinutes: number): string {
    if (totalMinutes) {
      if (totalMinutes > 60) {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours} hr ${minutes} min`;
      } else {
        let fullDuration =
          totalMinutes === 60 ? `${totalMinutes} hr` : `${totalMinutes} min`;
        // this.duration = fullDuration;
        return fullDuration;
      }
    } else {
      return '';
    }
  }

  closeDialog() {
    this.dialog.closeAll()
  }

  saveName(element: any) {
    console.log("element captured to save", element)
    localStorage.setItem('lookedupAccount', JSON.stringify(element));
    this.closeDialog()
  }
}
