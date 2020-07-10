import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { CheckoutpageComponent } from './checkoutpage/checkoutpage.component';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { ThirdpageComponent } from './thirdpage/thirdpage.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { FofComponent } from './fof/fof.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CheckoutItemComponent } from './checkout-item/checkout-item.component';
import { CartService } from './services/cart.service';
import { ProductService } from './services/product.service';

const appRoutes: Routes = [
  { path: 'sweat', component: HomepageComponent },
  { path: 'sweat/:id', component:  ProductpageComponent },
  { path: 'shirt', component: SecondpageComponent },
  { path: 'shirt/:id', component: ProductpageComponent },
  { path: 'accessorie', component: ThirdpageComponent },
  { path: 'accessorie/:id', component: ProductpageComponent },
  { path: '', redirectTo: 'sweat', pathMatch: 'full' },
  { path: 'login', component: LoginpageComponent },
  { path: 'checkout', component: CheckoutpageComponent },
  { path: 'not-found', component: FofComponent },
  { path: '**', redirectTo: 'not-found'}
]

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    LoginpageComponent,
    CheckoutpageComponent,
    SecondpageComponent,
    ThirdpageComponent,
    ProductpageComponent,
    FofComponent,
    ProductComponent,
    CheckoutItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    CartService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
