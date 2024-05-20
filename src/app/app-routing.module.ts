import { EditIntegrationComponent } from './integration/edit-integration/edit-integration.component';
import { CreateIntegrationComponent } from './integration/create-integration/create-integration.component';
import { ViewIntegrationComponent } from './integration/view-integration/view-integration.component';
import { RunHistoryComponent } from './run-history/run-history.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditTemplateComponent } from './templates/edit-template/edit-template.component';
import { ViewTemplateComponent } from './templates/view-template/view-template.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IntegrationComponent } from './integration/integration.component';
import { TemplatesComponent } from './templates/templates.component';
import { PartnerComponent } from './partner/partner.component';
import { PartnerTableComponent } from './partner/partner-table/partner-table.component';
import { PartnerListComponent } from './partner/partner-list/partner-list.component';
import { CreatePartnerComponent } from './partner/create-partner/create-partner.component';
import { PartnerDetailsComponent } from './partner/partner-details/partner-details.component';
import { ConnectionsComponent } from './connections/connections.component';
import { ConnectionsTableComponent } from './connections/connections-table/connections-table.component';
import { ConnectionListComponent } from './connections/connection-list/connection-list.component';
import { ConnectionCreateTemplateComponent } from './connections/connection-create-template/connection-create-template.component';
import { ConnectionDetailsComponent } from './connections/connection-detail/connection-detail.component';
import { CreateTemplateComponent } from './templates/create-template/create-template.component';
import { QuoteSummaryComponent } from './quote-summary/quote-summary.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user-profile', component: UserProfileComponent },
  {
    path: 'integrations',
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      {
        path: 'list',
        component: IntegrationComponent,
      },
      {
        path: 'view',
        component: ViewIntegrationComponent,
      },
      {
        path: 'create',
        component: CreateIntegrationComponent,
      },
      {
        path: 'edit',
        component: EditIntegrationComponent,
      },
    ],
  },
  { path: 'run-history', component: RunHistoryComponent },
  { path: 'quote-summary', component: QuoteSummaryComponent },
  { path: 'quote-detail/:quote_no', component: QuoteDetailComponent },
  {
    path: 'templates',
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      {
        path: 'list',
        component: TemplatesComponent,
      },
      {
        path: 'details',
        component: ViewTemplateComponent,
      },
      {
        path: 'create',
        component: CreateTemplateComponent,
      },
      {
        path: 'edit',
        component: EditTemplateComponent,
      },
    ],
  },
  {
    path: 'partners',
    component: PartnerComponent,
    children: [
      {
        path: '',
        redirectTo: 'view',
        pathMatch: 'full',
      },
      {
        path: 'view',
        component: PartnerTableComponent,
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full',
          },
          {
            path: 'list',
            component: PartnerListComponent,
          },
        ],
      },
      {
        path: 'create',
        component: CreatePartnerComponent,
      },
      {
        path: 'detail',
        component: PartnerDetailsComponent,
      },
    ],
  },
  {
    path: 'connections',
    component: ConnectionsComponent,
    children: [
      {
        path: '',
        redirectTo: 'view',
        pathMatch: 'full',
      },
      {
        path: 'view',
        component: ConnectionsTableComponent,
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full',
          },
          {
            path: 'list',
            component: ConnectionListComponent,
          },
        ],
      },
      {
        path: 'create',
        component: ConnectionCreateTemplateComponent,
      },
      {
        path: 'edit',
        component: ConnectionDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
