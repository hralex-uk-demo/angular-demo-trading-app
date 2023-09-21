import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {MatCommonModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatRadioModule} from '@angular/material/radio';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatChipsModule} from '@angular/material/chips';
import {MatBadgeModule} from '@angular/material/badge';
import {MatExpansionModule} from '@angular/material/expansion';

import { ButtonModule } from 'primeng/button';
import { TagModule }    from 'primeng/tag';
import { ChipModule } from 'primeng/chip';
import { MessagesModule } from 'primeng/messages';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdminDashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminViewComponent } from './admin/dashboard/view/view.component';
import { StocksComponent } from './admin/stocks/stocks.component';
import { StockInfoDialogComponent } from './admin/stocks/stock-info-dialog/stock-info-dialog.component';
import { StockAddDialogComponent } from './admin/stocks/stock-add-dialog/stock-add-dialog.component';
import { StockEditDialogComponent } from './admin/stocks/stock-edit-dialog/stock-edit-dialog.component';
import { StockDeleteDialogComponent } from './admin/stocks/stock-delete-dialog/stock-delete-dialog.component';
import { CustomersOverviewChartComponent } from './admin/dashboard/customers-overview-chart/customers-overview-chart.component';
import { SharepriceOverviewChartComponent } from './admin/dashboard/shareprice-overview-chart/shareprice-overview-chart.component';
import { CustomersComponent } from './admin/customers/customers.component';
import { CustomerDeleteDialogComponent } from './admin/customers/customer-delete-dialog/customer-delete-dialog.component';
import { CustomerAddDialogComponent } from './admin/customers/customer-add-dialog/customer-add-dialog.component';
import { CustomerEditDialogComponent } from './admin/customers/customer-edit-dialog/customer-edit-dialog.component';
import { CurrenciesComponent } from './admin/settings/currencies/currencies.component';
import { CurrencyAddDialogComponent } from './admin/settings/currencies/currency-add-dialog/currency-add-dialog.component';
import { CurrencyEditDialogComponent } from './admin/settings/currencies/currency-edit-dialog/currency-edit-dialog.component';
import { CurrencyDeleteDialogComponent } from './admin/settings/currencies/currency-delete-dialog/currency-delete-dialog.component';
import { SubscriptionDeleteDialogComponent } from './admin/settings/subscriptions/subscription-delete-dialog/subscription-delete-dialog.component';
import { SubscriptionEditDialogComponent } from './admin/settings/subscriptions/subscription-edit-dialog/subscription-edit-dialog.component';
import { SubscriptionAddDialogComponent } from './admin/settings/subscriptions/subscription-add-dialog/subscription-add-dialog.component';
import { SubscriptionsComponent } from './admin/settings/subscriptions/subscriptions.component';
import { SectorsComponent } from './admin/settings/sectors/sectors.component';
import { SectorAddDialogComponent } from './admin/settings/sectors/sector-add-dialog/sector-add-dialog.component';
import { SectorEditDialogComponent } from './admin/settings/sectors/sector-edit-dialog/sector-edit-dialog.component';
import { SectorDeleteDialogComponent } from './admin/settings/sectors/sector-delete-dialog/sector-delete-dialog.component';
import { ExchangesComponent } from './admin/settings/exchanges/exchanges.component';
import { ExchangeAddDialogComponent } from './admin/settings/exchanges/exchange-add-dialog/exchange-add-dialog.component';
import { ExchangeEditDialogComponent } from './admin/settings/exchanges/exchange-edit-dialog/exchange-edit-dialog.component';
import { ExchangeDeleteDialogComponent } from './admin/settings/exchanges/exchange-delete-dialog/exchange-delete-dialog.component';
import { GraphQLModule } from './graphql.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { currencyReducer } from './admin/shared/ngrx/currency.reducer';
import { CurrencyEffects } from './admin/shared/ngrx/currency.effects';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashboardComponent,
    AdminViewComponent,
    StocksComponent,
    StockInfoDialogComponent,
    StockAddDialogComponent,
    StockEditDialogComponent,
    StockDeleteDialogComponent,
    CustomersOverviewChartComponent,
    SharepriceOverviewChartComponent,
    CustomersComponent,
    CustomerDeleteDialogComponent,
    CustomerAddDialogComponent,
    CustomerEditDialogComponent,
    CurrenciesComponent,
    CurrencyAddDialogComponent,
    CurrencyEditDialogComponent,
    CurrencyDeleteDialogComponent,
    SubscriptionsComponent,
    SubscriptionDeleteDialogComponent,
    SubscriptionEditDialogComponent,
    SubscriptionAddDialogComponent,
    SectorsComponent,
    SectorAddDialogComponent,
    SectorEditDialogComponent,
    SectorDeleteDialogComponent,
    ExchangesComponent,
    ExchangeAddDialogComponent,
    ExchangeEditDialogComponent,
    ExchangeDeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatCommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatRadioModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTabsModule,
    MatStepperModule,
    MatCheckboxModule,
    MatDialogModule,
    MatChipsModule,
    MatBadgeModule,
    MatExpansionModule,
    ButtonModule,
    TagModule,
    ChipModule,
    MessagesModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([CurrencyEffects]),
    StoreModule.forFeature('currency', currencyReducer),
    GraphQLModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
