import { Component, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import axios from 'axios';
import { MatDialog } from '@angular/material/dialog';
import { QuoteAccountLookupComponent } from '../quote-account-lookup/quote-account-lookup.component';


@Component({
  selector: 'app-quote-summary',
  templateUrl: './quote-summary.component.html',
  styleUrls: ['./quote-summary.component.scss']
})
export class QuoteSummaryComponent {
  email: string = '';
  emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailError: string | null = null;
  showFilters: boolean = true
  quoteNumber: string = '';
  fromDate: Date = new Date();
  toDate: Date = new Date();
  currentDate: Date = new Date();
  dateError: String | null = null;
  origin: string  = '';
  destination: string = '';
  companyName: string = '';
  allExceptions: boolean;
  allQuotes: boolean;
  currentExceptions: boolean;
  searchType: string = '1';
  tableHeader: any = [
    'Quote_no',
    'Creation_Date',
    'Company_Name',
    'Account',
    'Exception',
    'UserID',
  ];
  fetchingData: boolean;
  tableDataSource: any = [
    {
      Quote_no: 'Q345012',
      Creation_Date: '2024-05-23',
      Company_Name: 'RST Corporation',
      Account: 'Account345',
      Exception: 'Memory Allocation Exception',
      UserID: 'user345',
    },
  ];
  viewStyle?: string = 'table';
  options = ['Option 1', 'Option 2', 'Option 3'];

  selectableCountries: any = [
    {
      name: "+93",
      alpha2Code: "af",
      numericCode: "004",
    },
    {
      name: "+358",
      alpha2Code: "ax",
      numericCode: "248",
    },
    {
      name: "+355",
      alpha2Code: "al",
      numericCode: "008",
    },
  ];
  localStorageCheckInterval: any;
  lookedupAccount: any;
  storedAccount: any = {};
  accountName: string;
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  minDate = new Date(2024, 0, 1);
  maxDate = new Date(2024, 11, 31);
  selectedDestination: string = '';
  selectedOrigin: string = '';
  zipCode: string;
  selectedCity: string;
  selectedState: string;
  zipDetails: any[] = [];
  showZipDropdown: boolean = false;
  originZipCode: string = '';
  originZipDetails: any[] = [];
  selectedOriginCity: string = '';
  selectedOriginState: string = '';


  constructor(private cdRef: ChangeDetectorRef, public dialog: MatDialog) {}

  ngOnInit() {
    this.setDefaultDateTime();
    this.fetchData();
    this.localStorageCheckInterval = setInterval(() => {
      const storedAccountString = localStorage.getItem('lookedupAccount');
      if (storedAccountString) {
        this.storedAccount = JSON.parse(storedAccountString);
        this.accountName = this.storedAccount.Name;
        this.cdRef.detectChanges();
      }
    }, 1000);
    window.addEventListener('beforeunload', this.clearLocalStorage);
  }

  setDefaultDateTime() {
    const now = new Date();
    const minutes = now.getMinutes();
    let roundedHour = now.getHours();

    if (minutes >= 30) {
      roundedHour += 1;
    }

    this.toDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), roundedHour, 0, 0);
    this.fromDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), roundedHour, 0, 0);

  }

  async fetchZipDetails() {
    if (this.selectedDestination === 'United States') {
      try {
        const response = await axios.get(
          'http://localhost:8080/api/v1/modal/zip/' + this.zipCode
        );
        this.zipDetails = response.data.zipDetails;
        console.log(this.zipDetails);
        this.showZipDropdown = true;
      } catch (error) {
        console.error('Error fetching zip details:', error);
      }
    }
  }

  onZipInputChange() {
    this.showZipDropdown = false;
  }

  onZipSelection(detail: any) {
    this.selectedCity = detail.city;
    this.selectedState = detail.stateProvince;
    this.zipCode = detail.zipCode;
    this.showZipDropdown = false;
  }

  async fetchOriginZipDetails() {
    if (this.selectedOrigin === 'United States') {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/modal/zip/' + this.originZipCode);
        this.originZipDetails = response.data.zipDetails;
      } catch (error) {
        console.error('Error fetching zip details:', error);
      }
    }
  }

  onOriginZipSelection(detail: any) {
    this.selectedOriginCity = detail.city;
    this.selectedOriginState = detail.stateProvince;
    this.originZipCode = detail.zipCode;
  }

  async submit() {
    this.fetchingData = true;
    let requestBody = {
      account: 'string',
      companyName: 'string',
      origin: {
        city: this.origin  || 'string',
        country: 'string',
        stateProvince: 'string',
        zipCode: 'string'
      },
      emailAddress: this.email || 'string',
      exception: 'string',
      fromDateTime: this.fromDate || 'string',
      destination: {
        city: this.destination || 'string',
        country: 'string',
        stateProvince: 'string',
        zipCode: 'string'
      },
      quoteNumber: this.quoteNumber || 'string',
      toDateTime: this.toDate || 'string',
      type: {
        allExceptions: this.searchType === '2' || true,
        allQuotes: this.searchType === '3'  || true,
        currentExceptions: this.searchType === '1' || true
      }
    }
    console.log(requestBody)
    try {
      const response = await axios.post('http://localhost:8080/api/v1/quote/search', requestBody);

      this.tableDataSource = response.data.searchExceptionResponse.map((item: any) => {
        return {
          Quote_no: item.quoteId,
          Creation_Date: item.quoteTimestamp,
          Company_Name: item.companyName,
          Account: item.account,
          Exception: item.exceptions.join(', '),
          UserID: 'Default'
        };
      });
      this.cdRef.detectChanges();

    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      this.fetchingData = false;
    }
  }


  validateEmail() {
    console.log("reached")
    if (!this.emailRegex.test(this.email)) {
      this.emailError = 'Invalid email format';
    } else {
      this.emailError = null;
    }
  }

  validateDateTime() {
    console.log("Erroor")
    if (this.fromDate && this.toDate) {
      if (this.fromDate >= this.toDate) {
        this.dateError = 'Error in date time'
      }
    }
  }

  async fetchData() {
    this.fetchingData = true;
    try {
      const response = await axios.post('http://localhost:8080/api/v1/quote/search', {
        account: 'string',
        companyName: 'string',
        destination: {
          city: 'string',
          country: 'string',
          stateProvince: 'string',
          zipCode: 'string'
        },
        emailAddress: 'string',
        exception: 'string',
        fromDateTime: 'string',
        origin: {
          city: 'string',
          country: 'string',
          stateProvince: 'string',
          zipCode: 'string'
        },
        quoteNumber: 'string',
        toDateTime: 'string',
        type: {
          allExceptions: true,
          allQuotes: true,
          currentExceptions: true
        }
      });

      this.tableDataSource = response.data.searchExceptionResponse.map((item: any) => {
        return {
          Quote_no: item.quoteId,
          Creation_Date: item.quoteTimestamp,
          Company_Name: item.companyName,
          Account: item.account,
          Exception: item.exceptions.join(', '),
          UserID: 'Default' // Fill in with actual data
        };
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    this.fetchingData = false;
    console.log(this.tableDataSource)
  }

  openAccountLookup() {
    this.dialog.open(QuoteAccountLookupComponent, {
      minWidth: '1000px',
    });
  }

  clearLocalStorage() {
    localStorage.removeItem('lookedupAccount');
  }

  ngOnDestroy() {
    if (this.localStorageCheckInterval) {
      clearInterval(this.localStorageCheckInterval);
    }
    window.removeEventListener('beforeunload', this.clearLocalStorage);
  }

}
