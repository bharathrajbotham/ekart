import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutComponent } from './layout.component';
import { OrderComponent } from './order/order.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
 
    DashboardComponent,
      SidenavComponent,
      LayoutComponent,
      OrderComponent,
      FormsComponent
  
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  exports:[
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatDividerModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,

  ]
})
export class ComponentsModule { }
