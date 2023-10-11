import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BrandsComponent } from './brands/brands.component';
import { CategoriesComponent } from './categories/categories.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ProductDatailesComponent } from './product-datailes/product-datailes.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SeemorePipe } from './seemore.pipe';
import { SearchPipe } from './search.pipe';
import { ToastrModule } from 'ngx-toastr';
import { CheckoutComponent } from './checkout/checkout.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { AllordersComponent } from './allorders/allorders.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component'; 
import { NgxSpinnerModule } from "ngx-spinner";
import { LoadingsInterceptor } from './loadings.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BrandsComponent,
    CategoriesComponent,
    FooterComponent,
    SliderComponent,
    LoginComponent,
    RegisterComponent,
    ProductsComponent,
    CartComponent,
    NotFoundComponent,
    ProductDatailesComponent,
    SeemorePipe,
    SearchPipe,
    CheckoutComponent,
    WishListComponent,
    AllordersComponent,
    ForgetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,

  ],
  providers: [
    {provide:HTTP_INTERCEPTORS , useClass:LoadingsInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
