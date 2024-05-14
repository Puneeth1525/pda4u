import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { MatDialog } from '@angular/material/dialog';
import { ReplaySubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { DateFormatInfoComponent } from '../date-format-info/date-format-info.component';

export interface Date {
  id: string;
  name: string;
}
@Component({
  selector: 'app-input-footer-properties',
  templateUrl: './input-footer-properties.component.html',
  styleUrls: ['./input-footer-properties.component.scss'],
})
export class InputFooterPropertiesComponent {
  options = ['String', 'Number', 'Array'];
  /** list of dates */
  protected dateOptions: Date[] = [
    { name: 'DD/MM/YYYY HH:mm:SS', id: '11' },
    { name: 'DD/MM/yyyy HH:mm:SS', id: '11' },
    { name: 'DD/mm/yyyy HH:mm:SS', id: '11' },
    { name: 'dd/mm/yyyy HH:mm:SS', id: '11' },
    { name: 'DD/YYYY/MM HH:mm:SS', id: '12' },
    { name: 'MM/DD/YYYY HH:mm:SS', id: '13' },
    { name: 'MM/YYYY/DD HH:mm:SS', id: '14' },
    { name: 'YYYY/MM/DD HH:mm:SS', id: '15' },
    { name: 'YYYY/DD/MM HH:mm:SS', id: '16' },
    { name: 'yyyy/MM/DD HH:mm:SS', id: '17' },
  ];

  public dateCtrl: FormControl<any> = new FormControl<any>(null);

  /** control for the MatSelect filter keyword */
  public dateFilterCtrl: FormControl<string | null> = new FormControl<string>(
    ''
  );

  /** list of dates filtered by search keyword */
  public filteredDates: ReplaySubject<Date[]> = new ReplaySubject<Date[]>(1);

  @ViewChild('singleSelect', { static: true }) singleSelect:
    | MatSelect
    | undefined;

  /** Subject that emits when the component has been destroyed. */
  protected _onDestroy = new Subject<void>();

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    // set initial selection
    // this.dateCtrl.setValue(this.dateOptions[5]);

    // load the initial date list
    this.filteredDates.next(this.dateOptions.slice());

    // listen for search field value changes
    this.dateFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterDates();
      });
  }

  ngAfterViewInit() {
    this.setInitialValue();
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  /**
   * Sets the initial value after the filteredDates are loaded initially
   */
  protected setInitialValue() {
    this.filteredDates
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        // setting the compareWith property to a comparison function
        // triggers initializing the selection according to the initial value of
        // the form control (i.e. _initializeSelection())
        // this needs to be done after the filteredDates are loaded initially
        // and after the mat-option elements are available
        if (this.singleSelect)
          this.singleSelect.compareWith = (a: Date, b: Date) =>
            a && b && a.id === b.id;
      });
  }

  protected filterDates() {
    if (!this.dateOptions) {
      return;
    }
    // get the search keyword
    let search = this.dateFilterCtrl.value;
    if (!search) {
      this.filteredDates.next(this.dateOptions.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the dates
    this.filteredDates.next(
      this.dateOptions.filter(
        (date) => search && date.name.toLowerCase().indexOf(search) > -1
      )
    );
  }

  openDialog() {
    this.dialog.open(DateFormatInfoComponent);
  }
}
