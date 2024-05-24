import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TableFilterComponent {
  options = ['Option 1', 'Option 2', 'Option 3'];
  showSliderBar: boolean = false;
  durationValue: any;
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  searchPlaceHolder: string = 'Search By Name';
  widthClass: string = 'Search By Name';

  showSlider() {
    this.showSliderBar = !this.showSliderBar;
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
}
