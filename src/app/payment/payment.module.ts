import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';
import { MatButtonModule } from '@angular/material/button';
import { Routes , RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes :Routes=[{
  path:'',
  component:PaymentComponent
}]
@NgModule({
  declarations: [
    PaymentComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule,
    RouterModule.forChild(routes)

  ]
})
export class PaymentModule { }
