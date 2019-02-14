import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { ShoppingCartComponent } from 'src/app/components/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from 'src/app/components/checkout/checkout.component';
import { OrderSuccessComponent } from 'src/app/components/order-success/order-success.component';
import { MyOrdersComponent } from 'src/app/components/my-orders/my-orders.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { AdminProductsComponent } from 'src/app/components/admin-products/admin-products.component';
import { AdminOrdersComponent } from 'src/app/components/admin-orders/admin-orders.component';
import { AuthGuard } from 'src/app/services/auth-guard.service';
import { ProductsComponent } from 'src/app/components/products/products.component';

const routes: Routes = [
  {path : '', component :  HomeComponent },
  {path: 'products', component : ProductsComponent },
  {path : 'shopping-cart', component : ShoppingCartComponent},
  {path: 'login', component : LoginComponent },

  {path : 'check-out', component : CheckOutComponent, canActivate : [AuthGuard]},
  {path : 'order-success',  component : OrderSuccessComponent, canActivate : [AuthGuard]},
  {path : 'my/orders' , component : MyOrdersComponent, canActivate : [AuthGuard]}, 
  
  {path: 'admin/products' , component : AdminProductsComponent, canActivate : [AuthGuard]},
  {path: 'admin/orders', component : AdminOrdersComponent, canActivate : [AuthGuard] },
  {path : '**', component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
