import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminViewComponent } from './admin/dashboard/view/view.component';
import { StocksComponent } from './admin/stocks/stocks.component';
import { CustomersComponent } from './admin/customers/customers.component';
import { CurrenciesComponent } from './admin/settings/currencies/currencies.component';
import { SubscriptionsComponent } from './admin/settings/subscriptions/subscriptions.component';
import { SectorsComponent } from './admin/settings/sectors/sectors.component';
import { ExchangesComponent } from './admin/settings/exchanges/exchanges.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'admin',
        component: AdminDashboardComponent,
        children: [
          {
            path: 'dashboard-view',
            component: AdminViewComponent
          },
          {
            path: 'stocks',
            component: StocksComponent
          },
          {
            path: 'customers',
            component: CustomersComponent
          },
          {
            path: 'settings/currencies',
            component: CurrenciesComponent,
          },
          {
            path: 'settings/subscriptions',
            component: SubscriptionsComponent,
          },
          {
            path: 'settings/sectors',
            component: SectorsComponent,
          },
          {
            path: 'settings/exchanges',
            component: ExchangesComponent,
          }
        ]},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
