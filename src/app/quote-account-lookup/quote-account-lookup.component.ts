import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-quote-account-lookup',
  templateUrl: './quote-account-lookup.component.html',
  styleUrls: ['./quote-account-lookup.component.scss']
})
export class QuoteAccountLookupComponent {
  constructor(@Inject(DIALOG_DATA) public data: any) {}

  tableHeader: any = [
    'Name',
    'Number',
    'Address',
  ];
  fetchingData: boolean;
  tableDataSource: any = [];
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

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.fetchingData = true;
    axios.get('http://localhost:8080/api/v1/modal/account')
      .then(response => {
        this.tableDataSource = response.data.accountModalResponse.map(item => {
          return {
            Name: item.companyName,
            Number: item.account,
            Address: item.addressLine1,
          };
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        this.fetchingData = false;
      });
  }

}
