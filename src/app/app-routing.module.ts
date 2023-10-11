import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrandsComponent } from './brands/brands.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { authGuard } from './auth.guard';
import { ProductDatailesComponent } from './product-datailes/product-datailes.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { AllordersComponent } from './allorders/allorders.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';


const routes: Routes = [
  { path:'', redirectTo:'login',pathMatch:"full"},
  {path:'login' ,component: LoginComponent},
  {path:'register' ,component:RegisterComponent },
  {path:'home' ,component: HomeComponent ,canActivate:[authGuard]  },
  {path:'brands' ,component: BrandsComponent ,canActivate:[authGuard] },
  {path:'cart' ,component: CartComponent ,canActivate:[authGuard] },
  {path:'wishList' ,component: WishListComponent ,canActivate:[authGuard] },
  {path:'categories' ,component: CategoriesComponent ,canActivate:[authGuard] },
  {path:'allorders' ,component: AllordersComponent ,canActivate:[authGuard] },
  {path:'forgetPassword' ,component: ForgetPasswordComponent  },
  {path:'checkout/:cartId' ,component: CheckoutComponent ,canActivate:[authGuard] },
  {path:'products' ,component: ProductsComponent ,canActivate:[authGuard] },
  {path:'productDetailes/:id' ,component: ProductDatailesComponent ,canActivate:[authGuard] },
  {path:'**' ,component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
