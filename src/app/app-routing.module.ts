import { NgModule } from '@angular/core';
import { PreloadingStrategy, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'payment',
    loadChildren:()=> import('./payment/payment.module').then(m=>m.PaymentModule)
  },
  {
    path:'home',
    loadChildren:()=> import('./home/home.module').then(m =>m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadingStrategy})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
