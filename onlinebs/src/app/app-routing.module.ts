import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { AuthorComponent } from './Author/Author.component';
import { BooksComponent } from './Books/Books.component';
import { LoginComponent } from './Login/Login.component';
import { ContactusComponent } from './Contactus/Contactus.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { RegisterComponent } from './register/register.component';
import { BuynowComponent } from './buynow/buynow.component';
import { AuthGuard } from './auth.guard';
import { AdminComponent } from './admin/admin.component';
import { Admin2Component } from './admin2/admin2.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'author', component: AuthorComponent },
  { path: 'books', component: BooksComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin2', component: Admin2Component },
  { path: 'contactus', component: ContactusComponent },
  { path: 'product/:check', component: ProductdetailsComponent },
  { path: 'buynow/:check', component: BuynowComponent, canActivate: [AuthGuard] },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
