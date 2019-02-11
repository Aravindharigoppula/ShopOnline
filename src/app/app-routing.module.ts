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

const routes: Routes = [
  {path : '', component :  HomeComponent },
  {path : 'shopping-cart', component : ShoppingCartComponent},
  {path : 'check-out', component : CheckOutComponent},
  {path : 'order-success',  component : OrderSuccessComponent},
  {path : 'my/orders' , component : MyOrdersComponent},
  {path: 'login', component : LoginComponent },
  {path: 'admin/products' , component : AdminProductsComponent},
  {path: 'admin/orders', component : AdminOrdersComponent },
  {path : '**', component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
