import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {MatButtonModule} from '@angular/material/button';
import { Routes , RouterModule, Router } from '@angular/router';


const routes :Routes=[{
path:'',
component:HomeComponent
}]

@NgModule({
  declarations: [
    HomeComponent
    
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
