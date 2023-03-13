import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { SlickCarouselModule } from 'ngx-slick-carousel';  
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopupComponent } from './popup/popup.component';
import { ProductComponent } from './product/product.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MaterialsModule } from './sidenav/materials/materials.module';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { ChartComponent } from './chart/chart.component';










@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminloginComponent,
    HeaderComponent,
    FooterComponent,
    ShopComponent,
    HomeComponent,
    PopupComponent,
    ProductComponent,
    SidenavComponent,
    ChartComponent,
    
    
        
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CarouselModule,
    SlickCarouselModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialsModule,
    ComponentsModule,
    HttpClientModule

         
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
