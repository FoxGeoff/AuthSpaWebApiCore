import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomermanagerComponent } from './customermanager.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '', component: CustomermanagerComponent,
    children: [
      //{ path: ':id', component: MainContentComponent },
      //{ path: '', component: MainContentComponent }
    ]
  },
  { path: '**', redirectTo: '' },
];
@NgModule({
  declarations: [CustomermanagerComponent],
  imports: [
    CommonModule,
    MaterialModule,
    //FlexLayoutModule,
    FormsModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class CustomermanagerModule { }
