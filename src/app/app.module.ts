import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { HeaderComponent } from './header/header.component';
import { FlashSaleComponent } from './flash-sale/flash-sale.component';
import { ChickenComponent } from './chicken/chicken.component';
import { MuttonComponent } from './mutton/mutton.component';
import { EggComponent } from './egg/egg.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from './card/card.component';
import { ProductWraperComponent } from './product-wraper/product-wraper.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ClickOutsideModule } from 'ng-click-outside';

const routes: Routes = [
  {
    path: 'chicken',
    component: ChickenComponent
  },
  {
    path: 'flashSale',
    component: FlashSaleComponent
  },
  {
    path: 'mutton',
    component: MuttonComponent
  },
  {
    path: 'egg',
    component: EggComponent
  },
  // {
  //   path: 'login',
  //   component: LoginComponent
  // }


]

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    HeaderComponent,
    FlashSaleComponent,
    ChickenComponent,
    MuttonComponent,
    EggComponent,
    CardComponent,
    ProductWraperComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, RouterModule.forRoot(routes),
    NgbModule,
    HttpClientModule,
    ClickOutsideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
