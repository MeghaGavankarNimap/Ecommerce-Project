import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from 'express';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view.component';

const routes:Routes=[
  {
    path:'view',
    component:ViewComponent
  },
  {
    path:'',
    component:ViewComponent
  }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ViewModule { }
