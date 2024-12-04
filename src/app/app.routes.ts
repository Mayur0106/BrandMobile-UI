import { Routes } from '@angular/router';
import { PurchaseComponent } from './components/main/purchase/purchase.component';
import { SaleComponent } from './components/main/sale/sale.component';
import { ReportsComponent } from './components/main/reports/reports.component';
import { MasterComponent } from './components/main/master/master.component';
import { DashboardComponent } from './components/main/dashboard/dashboard.component';

export const routes: Routes = [
    { path: 'purchase', component: PurchaseComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'sale', component: SaleComponent },
    { path: 'master', component: MasterComponent },
    { path: 'report', component: ReportsComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' } 
];
