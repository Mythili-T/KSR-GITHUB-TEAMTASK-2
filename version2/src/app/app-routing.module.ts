import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileComponent } from './mobile/mobile.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { AudioComponent } from './audio/audio.component';
import { AboutComponent } from './about/about.component';
import { PeripheralsComponent } from './peripherals/peripherals.component';
import { LaptopsComponent } from './Laptops/Laptops.component';
import { GamingComponent } from './Gaming/Gaming.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"mobile",
    component:MobileComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"footer",
    component:FooterComponent
  },
  {
    path:"audio",
    component:AudioComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"peripheral",
    component:PeripheralsComponent
  },
  {
    path:"laptop",
    component:LaptopsComponent
  },
  {
    path:"gaming",
    component:GamingComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
