import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  Output,
  ViewChild,
  OnDestroy,
  Injectable,
  Directive,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { ReplaySubject, Subject, take, takeUntil } from 'rxjs';

export interface Options {
  id: string;
  name: string;
}

@Component({
  selector: 'app-drop-down-with-search',
  templateUrl: './drop-down-with-search.component.html',
  styleUrls: ['./drop-down-with-search.component.scss']
})
export class DropDownWithSearchComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input() placeHolder: string = 'Select Value';
  @Input() label: string = 'Select Value';
  @Input() placeHolderSearchBox: string = 'Select Value';
  @Input() selectedValue: string;
  @Input() selectBoxOptions: any;
  @Input() callBack: Function;
  @Input() multiple: boolean = false;

  // keep it this for example purpose
  protected defaultOptions: Options[] = [
    { name: 'Walmart', id: '11' },
    { name: 'Norwegian Cruise Line', id: '12' },
    { name: 'National Car Rental', id: '13' },
    { name: 'Marriott International', id: '14' },
    { name: 'Delta Airlines', id: '15' },
    { name: 'Cax ', id: '16' },
    { name: 'Starbucks', id: '17' },
    { name: 'Ebay', id: '18' },
    { name: 'Hilton', id: '19' },
    { name: 'Hotel Indigo', id: '20' },
  ];

  /** control for the selected bank for multi-selection */
  public selectCtrl: FormControl<any> = new FormControl<any>(null);
  @ViewChild('multiSelect', { static: true }) multiSelect: MatSelect;

  /** control for the MatSelect filter keyword */
  public selectFilterCtrl: FormControl<string | null> = new FormControl<string>(
    ''
  );

  /** list of Options filtered by search keyword */
  public filteredOptions: ReplaySubject<Options[]> = new ReplaySubject<
    Options[]
  >(1);

  /** local copy of filtered banks to help set the toggle all checkbox state */
  protected filteredOptionsCache: Options[] = [];

  /** flags to set the toggle all checkbox state */
  isIndeterminate = false;
  isChecked = false;

  /** Subject that emits when the component has been destroyed. */
  protected _onDestroy = new Subject<void>();

  constructor() {}

  ngOnInit(): void {
    // set initial selection
    this.selectCtrl.setValue([]);
    this.filteredOptions.next(this.selectBoxOptions.slice());

    // listen for search field value changes
    this.selectFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterOptionsMulti();
        this.setToggleAllCheckboxState();
      });

    // listen for multi select field value changes
    this.selectCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.setToggleAllCheckboxState();
      });
  }

  ngAfterViewInit() {
    this.setInitialValue();
  }

  protected setInitialValue() {
    this.filteredOptions
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        if (this.multiSelect)
          this.multiSelect.compareWith = (a: Options, b: Options) =>
            a && b && a.id === b.id;
      });
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  protected filterOptionsMulti() {
    if (!this.selectBoxOptions) {
      return;
    }
    // get the search keyword
    let search = this.selectFilterCtrl.value;
    if (!search) {
      this.filteredOptionsCache = this.selectBoxOptions.slice();
      this.filteredOptions.next(this.filteredOptionsCache);
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredOptionsCache = this.selectBoxOptions.filter(
      (option) => option.name.toLowerCase().indexOf(search) > -1
    );
    this.filteredOptions.next(this.filteredOptionsCache);
  }

  toggleSelectAll(selectAllValue: boolean) {
    this.filteredOptions
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe((val) => {
        if (selectAllValue) {
          this.selectCtrl.patchValue(val);
        } else {
          this.selectCtrl.patchValue([]);
        }
      });
  }

  protected setToggleAllCheckboxState() {
    let filteredLength = 0;
    if (this.selectCtrl && this.selectCtrl.value) {
      let optionsSelected = this.filteredOptionsCache || this.selectBoxOptions;
      optionsSelected.forEach((el) => {
        this.selectCtrl.value.forEach((element) => {
          if (el.name === element.name) {
            filteredLength++;
          }
        });
      });
      this.isChecked =
        filteredLength > 0 && filteredLength === optionsSelected.length;
    }
  }
}
