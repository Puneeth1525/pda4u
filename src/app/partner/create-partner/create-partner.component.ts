import { Component, ViewEncapsulation } from '@angular/core';

export interface ICountryAndCode {
  code: string;
  name: string;
}
@Component({
  selector: 'app-create-partner',
  templateUrl: './create-partner.component.html',
  styleUrls: ['./create-partner.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CreatePartnerComponent {
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
