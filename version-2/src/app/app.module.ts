import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexpageComponent } from './indexpage/indexpage.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HomepageComponent } from './Homepage/Homepage.component';
import { HeaderComponent } from './Header/Header.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegisterComponent } from './register/register.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { HeaderGuard } from './header.guard';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { MaterialspageComponent } from './materialspage/materialspage.component';
import { CSEnotesComponent } from './CSEnotes/CSEnotes.component';
import { ClassComponent } from './class/class.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminHomepageComponent } from './admin/admin-homepage/admin-homepage.component';
import { StudentComponent } from './admin/student/student.component';



@NgModule({
  declarations: [
    AppComponent,
      IndexpageComponent,
      HomepageComponent,
      HeaderComponent,
      FooterComponent,
      ProfileComponent,
      LoginpageComponent,
      RegisterComponent,
      ForgetpasswordComponent,
      AboutpageComponent,
      ContactpageComponent,
      MaterialspageComponent,
      CSEnotesComponent,
      ClassComponent,
      AdminHeaderComponent,
      AdminHomepageComponent,
      StudentComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [HeaderGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
