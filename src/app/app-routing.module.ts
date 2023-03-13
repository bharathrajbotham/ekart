import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from 'ngx-owl-carousel-o';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ChartComponent } from './chart/chart.component';
import { LayoutComponent } from './components/layout.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PopupComponent } from './popup/popup.component';
import { ProductComponent } from './product/product.component';
import { ShopComponent } from './shop/shop.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'shop',component:ShopComponent},
  {path:'home',component:HomeComponent},
    {path:'contact',component:ContactComponent},
  {path:'product',component:ProductComponent},
  {path:'popup',component:PopupComponent},
  {path:'sidenav',component:SidenavComponent},
  {path:'layout',component:LayoutComponent},
  {path:'chart',component:ChartComponent},

  
  
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
