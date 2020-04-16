import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { RouterModule } from '@angular/router';
import { route } from './router.module';
import { FruitsComponent } from './fruits/fruits.component';
import { HomeComponent } from './home/home.component';
import { NonvegComponent } from './nonveg/nonveg.component';
@NgModule({
  declarations: [
    AppComponent,LoginComponent,HeaderComponent,NavbarComponent, VegetablesComponent,FruitsComponent,
    HomeComponent,NonvegComponent],
  imports: [
    BrowserModule,RouterModule.forRoot(route,{useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }