import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
// import {NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { NavbComponent } from './navb/navb.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { HomeComponent } from './home/home.component';
import { MenuLeftComponent } from './menu-left/menu-left.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbComponent,
    ShoppingListComponent,
    HomeComponent,
    MenuLeftComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgxBootstrapIconsModule.pick(allIcons),
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
