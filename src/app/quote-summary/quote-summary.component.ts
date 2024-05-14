import { Component } from '@angular/core';
import { ICountryAndCode } from '../partner/create-partner/create-partner.component';

@Component({
  selector: 'app-quote-summary',
  templateUrl: './quote-summary.component.html',
  styleUrls: ['./quote-summary.component.scss']
})
export class QuoteSummaryComponent {
  tableHeader: any = [
    'Quote_no',
    'Creation_Date',
    'Company_Name',
    'Account',
    'Exception',
    'UserID',
  ];;
  tableDataSource: any = [
    {
      Quote_no: 'Q789012',
      Creation_Date: '2024-05-14',
      Company_Name: 'XYZ Corporation',
      Account: 'Account456',
      Exception: 'Index Out of Range Exception',
      UserID: 'user456',
    },
    {
      Quote_no: 'Q345678',
      Creation_Date: '2024-05-15',
      Company_Name: 'LMN Corporation',
      Account: 'Account789',
      Exception: 'File Not Found Exception',
      UserID: 'user789',
    },
    {
      Quote_no: 'Q901234',
      Creation_Date: '2024-05-16',
      Company_Name: 'PQR Corporation',
      Account: 'Account012',
      Exception: 'Database Connection Exception',
      UserID: 'user012',
    },
    {
      Quote_no: 'Q567890',
      Creation_Date: '2024-05-17',
      Company_Name: 'DEF Corporation',
      Account: 'Account345',
      Exception: 'Permission Denied Exception',
      UserID: 'user345',
    },
    {
      Quote_no: 'Q234567',
      Creation_Date: '2024-05-18',
      Company_Name: 'GHI Corporation',
      Account: 'Account678',
      Exception: 'Invalid Input Exception',
      UserID: 'user678',
    },
    {
      Quote_no: 'Q890123',
      Creation_Date: '2024-05-19',
      Company_Name: 'JKL Corporation',
      Account: 'Account901',
      Exception: 'Runtime Exception',
      UserID: 'user901',
    },
    {
      Quote_no: 'Q456789',
      Creation_Date: '2024-05-20',
      Company_Name: 'STU Corporation',
      Account: 'Account234',
      Exception: 'Syntax Error Exception',
      UserID: 'user234',
    },
    {
      Quote_no: 'Q012345',
      Creation_Date: '2024-05-21',
      Company_Name: 'VWX Corporation',
      Account: 'Account567',
      Exception: 'Arithmetic Exception',
      UserID: 'user567',
    },
    {
      Quote_no: 'Q678901',
      Creation_Date: '2024-05-22',
      Company_Name: 'NOP Corporation',
      Account: 'Account890',
      Exception: 'Type Mismatch Exception',
      UserID: 'user890',
    },
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
  countries: ICountryAndCode[] = [
    { code: "+91", name: "India" },
    { code: "+61", name: "Australia" },
    { code: "+1", name: "USA" }
  ];
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
  constructor() {}
}
