import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home.component';
import { BooksComponent } from './Books/Books.component';
import { AuthorComponent } from './Author/Author.component';
import { ContactusComponent } from './Contactus/Contactus.component';
import { LoginComponent } from './Login/Login.component';
import { HttpClientModule } from '@angular/common/http';
import { NgImageSliderModule } from 'ng-image-slider';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { Admin2Component } from './admin2/admin2.component';



@NgModule({
  declarations: [
    AppComponent,
      HomeComponent,
      BooksComponent,
      AuthorComponent,
      ContactusComponent,
      LoginComponent,
      ProductdetailsComponent,
      FooterComponent,
      RegisterComponent,
      AdminComponent,
      Admin2Component
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,NgImageSliderModule,FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
