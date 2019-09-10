import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DeskTopComponent } from './desk-top/desk-top.component';
import { AuthGuardService } from './services/auth-guard.service';
import { CallApiComponent } from './call-api/call-api.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';

const routes: Routes = [
  { path: '', component: DeskTopComponent },
  { path: 'auth-callback', component: AuthCallbackComponent },
  { path: 'call-api', component: CallApiComponent, canActivate: [AuthGuardService] },
  { path: 'customermanager', loadChildren: './customermanager/customermanager.module#CustomermanagerModule', canActivate: [AuthGuardService] },
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
