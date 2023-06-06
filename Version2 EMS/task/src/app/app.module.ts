import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule}from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home.component';
import { AboutComponent } from './About/About.component';
import { CultureComponent } from './Culture/Culture.component';
import { OpeningsComponent } from './Openings/Openings.component';
import { LoginComponent } from './Login/Login.component';
import { Service_PageComponent } from './Service_Page/Service_Page.component';
import { HeaderComponent } from './Header/Header.component';
import { FooterComponent } from './Footer/Footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotPassComponent } from './ForgotPass/ForgotPass.component';
import { Emp_HomeComponent } from './Emp_Home/Emp_Home.component';
import { Emp_AttendanceComponent } from './Emp_Attendance/Emp_Attendance.component';
import {HttpClientModule} from '@angular/common/http';
import { Admin_HomeComponent } from './Admin_Home/Admin_Home.component';
import { Admin_HeaderComponent } from './Admin_Header/Admin_Header.component';
import { Admin_DashboardComponent } from './Admin_Dashboard/Admin_Dashboard.component';
import { Admin_leaveComponent } from './Admin_leave/Admin_leave.component';
import { Admin_DetailsComponent } from './Admin_Details/Admin_Details.component';
import { Admin_AttendanceComponent } from './Admin_Attendance/Admin_Attendance.component';
import { Admin_WorkComponent } from './Admin_Work/Admin_Work.component';
import { RegisterComponent } from './Register/Register.component';
import { Emp_LeaveComponent } from './Emp_Leave/Emp_Leave.component';
import { Emp_WorkStatusComponent } from './Emp_WorkStatus/Emp_WorkStatus.component';
import { Admin_NotificationComponent } from './Admin_Notification/Admin_Notification.component';
import { Emp_cPassComponent } from './Emp_cPass/Emp_cPass.component';
import { Emp_HeaderComponent } from './Emp_Header/Emp_Header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WorkFormComponent } from './work-form/work-form.component';





@NgModule({
  declarations: [
    AppComponent,
      HomeComponent,
      AboutComponent,
      CultureComponent,
      OpeningsComponent,
      LoginComponent,
      Service_PageComponent,
      HeaderComponent,
      FooterComponent,
      ForgotPassComponent,
      Emp_HomeComponent,
      Emp_AttendanceComponent,
      Admin_HomeComponent,
      Admin_HeaderComponent,
      Admin_DashboardComponent,
      Admin_leaveComponent,
      Admin_DetailsComponent,
      Admin_AttendanceComponent,
      Admin_WorkComponent,
      RegisterComponent,
      Emp_LeaveComponent,
      Emp_WorkStatusComponent,
      Admin_NotificationComponent,
      Emp_cPassComponent,
      Emp_HeaderComponent,
      WorkFormComponent


   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
