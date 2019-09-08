import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DeskTopComponent } from './desk-top/desk-top.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', component: DeskTopComponent },
  { path: 'customermanager', loadChildren: './customermanager/customermanager.module#CustomermanagerModule',canActivate: [AuthGuardService] },
  //{ path: 'invoicemanager', loadChildren: './invoicemanager/invoicemanager.module#InvoicemanagerModule' }, 
  //{ path: 'invoiceproductmanager', loadChildren: './invoice-productmanager/invoice-productmanager.module#InvoiceProductmanagerModule' },
  //{ path: 'productmanager', loadChildren: './productmanager/productmanager.module#ProductmanagerModule' },
  //{ path: 'demo', loadChildren: './demo/demo.module#DemoModule' },
  { path: '**', component: PageNotFoundComponent }
  
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
