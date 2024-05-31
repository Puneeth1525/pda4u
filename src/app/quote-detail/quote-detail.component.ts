import { Component, ElementRef, ViewChild, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import axios from 'axios'
import { MatDialog } from '@angular/material/dialog';
import { QuoteAccountLookupComponent } from '../quote-account-lookup/quote-account-lookup.component';
import { QuoteEmailComponent } from '../quote-email/quote-email.component';
import { env } from 'src/environments/environment';


@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.scss']
})
export class QuoteDetailComponent implements OnInit {
  options = ['Option 1', 'Option 2', 'Option 3'];
  connectionType = ['AWS', 'SFTP'];
  selectionConnection = '';
  isCompressionEnabled: any;
  isEncryptionEnabled: any;
  emailFormControl = new FormControl('', [Validators.required]);
  @ViewChild('imgFileInputs') inputElement: ElementRef | undefined;

  quoteNumber: string = '';
  quoteDetails: any = {};
  errorMessage: string = '';
  exceptionsList: string = '';
  isContactInfoCollapsed: boolean = true;
  isShippingInfoCollapsed: boolean = true;
  isComInfoCollapsed: boolean = true;
  isTotalChargesCollapsed: boolean = true;
  removeButtonVisibility: string[] = [];


  // adding new input field
  addComFirstTime: boolean = true;
  isInvalid: boolean[] = [];
  isButtonClicked: boolean = false;
  accountName: string;
  localStorageCheckInterval: any;
  storedAccount: any;
  selectedOrigin: string;
  selectedDestination: string;
  zipCode: string;
  selectedCity: string;
  selectedState: string;
  zipDetails: any[] = [];
  showZipDropdown: boolean = false;
  originZipCode: string = '';
  originZipDetails: any[] = [];
  selectedOriginCity: string = '';
  selectedOriginState: string = '';
  dd3s: any[] = [];
  panelOpenState = false;
  comError: string;



  constructor(private cdRef: ChangeDetectorRef, private route: ActivatedRoute, private http: HttpClient, public dialog: MatDialog) {

  }

  clearDestination() {
    this.zipCode= '';
    this.selectedCity = '';
    this.selectedState = '';
  }
  clearOrigin() {
    this.originZipCode = '';
    this.selectedOriginCity= '';
    this.selectedOriginState = '';
  }

  showRemoveButton(index: number) {
    this.removeButtonVisibility[index] = 'visible';
  }

  hideRemoveButton(index: number) {
    this.removeButtonVisibility[index] = 'hidden';
  }

  ngOnInit(): void {
    this.localStorageCheckInterval = setInterval(() => {
      let storedAccountString = localStorage.getItem('lookedupAccount');
      if (storedAccountString) {
        this.storedAccount = JSON.parse(storedAccountString);
        this.accountName = this.storedAccount.Name;
        this.cdRef.detectChanges();
      }
      console.log(this.accountName)
    }, 1000);

    window.addEventListener('beforeunload', this.clearLocalStorage);
    this.route.paramMap.subscribe(params => {
      this.quoteNumber = params.get('quoteNumber') || '22';
      this.fetchQuoteDetails();
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

  openAccountLookup() {
    console.log("looking up")
    this.dialog.open(QuoteAccountLookupComponent, {
      minWidth: '1000px',
    });
  }

  openEmail() {
    console.log("looking up")
    this.dialog.open(QuoteEmailComponent, {
      minWidth: '1000px',
    });
  }

  async saveQuoteDetails(): Promise<void> {
    try {
      const response = await axios.post(`${env.REST_URL}${env.VERSION}/details/save`, this.quoteDetails);
      console.log('Quote details saved successfully:', response.data);
    } catch (error) {
      this.errorMessage = 'Error saving quote details';
      console.error(error);
    }
  }


  async fetchQuoteDetails(): Promise<void> {
    try {
      const response = await axios.get(`${env.REST_URL}${env.VERSION}/details/${this.quoteNumber}`);
      this.quoteDetails = response.data.details[0].quoteDetails;
      if (this.quoteDetails.exceptions) {
        this.exceptionsList = this.quoteDetails.exceptions.join(', ');
      }
      let numberOfButtons = this.quoteDetails.com.coms.length
      for (let i = 0; i < numberOfButtons; i++) {
        this.removeButtonVisibility.push('hidden');
      }
    } catch (error) {
      this.errorMessage = 'Error fetching quote details';
      console.error(error);
    }
    console.log(this.quoteNumber)
    console.log(this.quoteDetails)

    this.quoteDetails.com.coms.forEach(com => {
      this.dd3s.push(com.dd3)
      // console.log(com.dd3)
    });
    console.log("each", this.dd3s)
  }

  onFileSelected() {}
  selectionConnectionValue(e: any) {
    console.log(this.emailFormControl.hasError('required'));
    this.selectionConnection = e;
  }

  async fetchZipDetails() {
    console.log("fetching zips")
    try {
      const response = await axios.get(`${env.REST_URL}${env.VERSION}/modal/zip/` + this.zipCode);
      this.zipDetails = response.data.zipDetails;
      console.log(this.zipDetails)
      this.showZipDropdown = true;
    } catch (error) {
      console.error('Error fetching zip details:', error);
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
    try {
      const response = await axios.get(`${env.REST_URL}${env.VERSION}/modal/zip/` + this.originZipCode);
      this.originZipDetails = response.data.zipDetails;
    } catch (error) {
      console.error('Error fetching zip details:', error);
    }
  }

  onOriginZipSelection(detail: any) {
    this.selectedOriginCity = detail.city;
    this.selectedOriginState = detail.stateProvince;
    this.originZipCode = detail.zipCode;
  }



  addInputField(): void {

    this.quoteDetails.com.coms.push({
      dd3: '',
      tb2: `tb3-${this.quoteDetails.com.coms.length + 1}`
    });
    this.comError = ''
  }


  removeComField(index: number): void {
    if (this.quoteDetails.com.coms.length > 1) {
      this.quoteDetails.com.coms.splice(index, 1);
    } else {
      this.comError = 'Cannot delete the last remaining field.'
    }
  }
}
