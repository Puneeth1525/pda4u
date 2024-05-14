import { Component } from '@angular/core';

interface StatusDataInterface {
  title: String;
  value: Number;
  percentage: number;
  link: String;
}

@Component({
  selector: 'app-status-cards',
  templateUrl: './status-cards.component.html',
  styleUrls: ['./status-cards.component.scss'],
})
export class StatusCardsComponent {
  statusData: StatusDataInterface[];

  constructor() {
    this.statusData = [
      {
        title: 'Failed Runs',
        value: 24,
        percentage: 13,
        link:''
      },
      {
        title: 'Success Runs',
        value: 12,
        percentage: 4,
        link:''
      },
      {
        title: 'Failed Integrations',
        value: 132,
        percentage: 14,
        link:''
      },
      {
        title: 'Success Integrations',
        value: 112,
        percentage: 88,
        link:''
      },
    ];
  }
}
