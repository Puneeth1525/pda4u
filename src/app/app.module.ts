import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEchartsModule } from 'ngx-echarts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { ObserversModule } from '@angular/cdk/observers';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatTreeModule } from '@angular/material/tree';
import { MatRadioModule } from '@angular/material/radio';
import {MatSliderModule} from '@angular/material/slider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { DeleteButtonComponent } from './common-components/delete-button/delete-button.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HeaderComponent } from './common-components/header/header.component';
import { SvgIconsComponent } from './common-components/svg-icons/svg-icons.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DynamicTableComponent } from './common-components/dynamic-table/dynamic-table.component';
import { TableFilterComponent } from './common-components/table-filter/table-filter.component';
import { ExecutionLogDialogComponent } from './common-components/execution-log-dialog/execution-log-dialog.component';
import { CdkColumnDef } from '@angular/cdk/table';
import { StatusFilterComponent } from './common-components/status-filter/status-filter.component';
import { TableSearchComponent } from './common-components/table-search/table-search.component';
import { ErrorSidePanelComponent } from './common-components/error-side-panel/error-side-panel.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DropDownWithSearchComponent } from './common-components/drop-down-with-search/drop-down-with-search.component';
import { GlobalTableSearchComponent } from './common-components/global-table-search/global-table-search.component';
import { QuoteSummaryComponent } from './quote-summary/quote-summary.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { QuoteAccountLookupComponent } from './quote-account-lookup/quote-account-lookup.component';
import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule
} from '@angular-material-components/datetime-picker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatTabsModule} from '@angular/material/tabs';
import { QuoteEmailComponent } from './quote-email/quote-email.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    DeleteButtonComponent,
    HeaderComponent,
    SvgIconsComponent,
    UserProfileComponent,
    DynamicTableComponent,
    TableFilterComponent,
    ExecutionLogDialogComponent,
    StatusFilterComponent,
    TableSearchComponent,
    ErrorSidePanelComponent,
    DropDownWithSearchComponent,
    GlobalTableSearchComponent,
    QuoteSummaryComponent,
    QuoteDetailComponent,
    QuoteAccountLookupComponent,
    QuoteEmailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    ObserversModule,
    CdkTreeModule,
    MatTreeModule,
    MatRadioModule,
    ScrollingModule,
    MatSlideToggleModule,
    MatMenuModule,
    NgxMatSelectSearchModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    DragDropModule,
    NgxEchartsModule.forRoot({
      /**
       * This will import all modules from echarts.
       * If you only need custom modules,
       * please refer to [Custom Build] section.
       */
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatExpansionModule,
  ],
  providers: [CdkColumnDef],
  bootstrap: [AppComponent],
})
export class AppModule {}
