import { UserProfileComponent } from './user-profile/user-profile.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuoteSummaryComponent } from './quote-summary/quote-summary.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';

const routes: Routes = [
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'quote-summary', component: QuoteSummaryComponent },
  { path: 'quote-detail/:quote_no', component: QuoteDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
