import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { LayoutComponent } from './layout.component';
import { OrderComponent } from './order/order.component';


const routes: Routes = [
  {path:'',component:LayoutComponent ,children:[
    {path:'dashboard',component:DashboardComponent},
    {path:'order',component:OrderComponent},
    {path:'forms',component:FormsComponent},
   

  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
