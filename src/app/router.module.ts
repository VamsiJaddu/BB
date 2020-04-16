import {Routes} from '@angular/router'
import { LoginComponent } from './login/login.component'
import { VegetablesComponent } from './vegetables/vegetables.component'
import { FruitsComponent } from './fruits/fruits.component'
import { NonvegComponent } from './nonveg/nonveg.component'
import { HomeComponent } from './home/home.component'



export const route:Routes=[
  {
   path:'',
   redirectTo:'login',
   pathMatch:'full'
},
{
    path:'login',
    component:LoginComponent
},
{
    path:'home',
    component:HomeComponent
},

{
    path:'vegetables',
    component:VegetablesComponent
},
{
    path:'fruits',
    component:FruitsComponent
},
{
    path:'nonveg',
    component:NonvegComponent
}]