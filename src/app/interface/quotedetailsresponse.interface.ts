// quotedetails-api-response.interface.ts

export interface QuoteDetailsUpdate {
  quoteNumber: string;
  exceptions: string[];
  customerInformation: CustomerInformation;
  shippingInformation: ShippingInformation;
  com: Com;
  totalCharges: TotalCharges;
}

export interface QuoteDetailsApiResponse {
    details: Detail[];
  }
  
  export interface Detail {
    quoteDetails: QuoteDetails;
    messageList: Message[];
  }
  
  export interface QuoteDetails {
    quoteNumber: string;
    exceptions: string[];
    customerInformation: CustomerInformation;
    shippingInformation: ShippingInformation;
    com: Com;
    totalCharges: TotalCharges;
  }
  
  export interface CustomerInformation {
    account: string;
    companyName: string;
    dd1: string;
    dd2: string;
    rtb1: string;
    contactInformation: ContactInformation;
  }
  
  export interface ContactInformation {
    name: string;
    phone: string;
    phoneExt: string;
    email: string;
  }
  
  export interface ShippingInformation {
    origin: Location;
    destination: Location;
  }
  
  export interface Location {
    city: string;
    stateProvince: string;
    zipCode: string;
    country: string;
  }
  
  export interface Com {
    coms: ComItem[];
  }
  
  export interface ComItem {
    count: number;
    dd3: string;
    tb2: string;
  }
  
  export interface TotalCharges {
    baseRate: string;
    acc: string;
    finalRate: string;
  }
  
  export interface Message {
    type: string;
    code: string;
    text: string;
  }
  