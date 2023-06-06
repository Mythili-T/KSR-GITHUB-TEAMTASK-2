import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './Home/Home.component';
import { LoginComponent } from './Login/Login.component';
import { RegisterComponent } from './Register/Register.component';
import { StudioComponent } from './Studio/Studio.component';
import { WeddingDetailsComponent } from './wedding-details/wedding-details.component';
import { WeddingsComponent } from './Weddings/Weddings.component';
import { AdminComponent } from './Admin/Admin.component';
import { AdminViewUserComponent } from './AdminViewUser/AdminViewUser.component';
import { CartComponent } from './Cart/Cart.component';
import { AuthGuard } from './auth.guard';
import { AdminProductsComponent } from './AdminProducts/AdminProducts.component';
import { AdminAddProductsComponent } from './AdminAddProducts/AdminAddProducts.component';
import { CateringComponent } from './catering/catering.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
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
    path:'contact',
    component:ContactComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'weddings',
    component:WeddingsComponent
  },
  {
    path:'weddings/:check',
    component:WeddingDetailsComponent
  },
  {
    path:'studio',
    component:StudioComponent
  },
  {
    path:'cater',
    component:CateringComponent
  },
  {
    path:'contact',
    component:ContactComponent,
  },{
    path:'cart',
    component:CartComponent,
    canActivate:[AuthGuard],
  },
  // {
  //   path:'**',
  //   component:HomeComponent
  // },

  {
    path:'Admin',
    component:AdminComponent
  },
  {
    path:'AdminViewUser',
    component:AdminViewUserComponent
  },
  {
  path:'AdminProducts',
  component:AdminProductsComponent
  },
  {
    path:'AdminAddProducts',
    component:AdminAddProductsComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
