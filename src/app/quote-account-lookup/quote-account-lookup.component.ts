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
  selectedTab: string = 'account';
  accountName: string = '';
  address: string = '';
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
    this.fetchData('account');
  }

  onTabChange(event: any): void {
    this.selectedTab = event.index === 0 ? 'account' : 'address';
    this.fetchData(this.selectedTab);
  }

  fetchData(type: string, query: string = ''): void {
    console.log("fetching data")
    this.fetchingData = true;
    let url = `http://localhost:8080/api/v1/modal/${type}`;
    if (query) {
      url += `/${query}`;
    }

    axios.get(url)
      .then(response => {
        this.tableDataSource = response.data.accountModalResponse.map(item => {
          return {
            Name: type === 'account' ? item.companyName : item.companyName,
            Number: type === 'account' ? item.account : item.addressLine1,
            Address: type === 'account' ? item.addressLine1 : item.account,
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

  onAccountSubmit(): void {
    console.log("reached")

      this.fetchData('account', this.accountName);

  }

  onAddressSubmit(): void {
    console.log("reached")

      this.fetchData('address', this.address);

  }


}
