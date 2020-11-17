import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import{NavComponent} from './home/nav/nav.component';
import { Showcase1Component } from './home/showcase1/showcase1.component';
import { ClothesSaleComponent } from './clothes-sale/clothes-sale.component';
import { AccessoriesImgsComponent } from './accessories-imgs/accessories-imgs.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    Showcase1Component,
    ClothesSaleComponent,
    AccessoriesImgsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }