import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './Header/Header.component';
import { LoginComponent } from './Login/Login.component';
import { RegisterComponent } from './Register/Register.component';
import { ForgotComponent } from './Forgot/Forgot.component';
import { ContactusComponent } from './Contactus/Contactus.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './Footer/Footer.component';
import { BloodfactsComponent } from './bloodfacts/bloodfacts.component';
import { RequestbloodComponent } from './requestblood/requestblood.component';
import { AboutusComponent } from './Aboutus/Aboutus.component';
import { DonorComponent } from './donor/donor.component';
import { FaqComponent } from './faq/faq.component';
import { DonorDonationhistoryComponent } from './donorDonationhistory/donorDonationhistory.component';
import { DonorUpdateprofileComponent } from './donorUpdateprofile/donorUpdateprofile.component';
import { DonorSetstatusComponent } from './donorSetstatus/donorSetstatus.component';
import { DonorDeleteaccountComponent } from './donorDeleteaccount/donorDeleteaccount.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [	
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    ContactusComponent,
    FooterComponent,
    BloodfactsComponent,
    RequestbloodComponent,
    AboutusComponent,
    DonorComponent,
    FaqComponent,
    DonorDonationhistoryComponent,
    DonorUpdateprofileComponent,
    DonorSetstatusComponent,
    DonorDeleteaccountComponent,
      AdminComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
