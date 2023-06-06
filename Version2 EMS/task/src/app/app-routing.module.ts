import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './About/About.component';
import { CultureComponent } from './Culture/Culture.component';
import { Emp_AttendanceComponent } from './Emp_Attendance/Emp_Attendance.component';
import { ForgotPassComponent } from './ForgotPass/ForgotPass.component';
import { HomeComponent } from './Home/Home.component';
import { LoginComponent } from './Login/Login.component';
import { OpeningsComponent } from './Openings/Openings.component';

import { Service_PageComponent } from './Service_Page/Service_Page.component';
import { Emp_HomeComponent } from './Emp_Home/Emp_Home.component';
import { Admin_HomeComponent } from './Admin_Home/Admin_Home.component';
import { RegisterComponent } from './Register/Register.component';
import { Emp_LeaveComponent } from './Emp_Leave/Emp_Leave.component';
import { Emp_WorkStatusComponent } from './Emp_WorkStatus/Emp_WorkStatus.component';
import { Admin_NotificationComponent } from './Admin_Notification/Admin_Notification.component';
import { Emp_cPassComponent } from './Emp_cPass/Emp_cPass.component';
import { Admin_WorkComponent } from './Admin_Work/Admin_Work.component';
import { Admin_DashboardComponent } from './Admin_Dashboard/Admin_Dashboard.component';
import { Admin_leaveComponent } from './Admin_leave/Admin_leave.component';
import { Admin_DetailsComponent } from './Admin_Details/Admin_Details.component';
import { Admin_AttendanceComponent } from './Admin_Attendance/Admin_Attendance.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },

  {
    path:"Home",
    component:HomeComponent
  },
  {
    path:"About",
    component:AboutComponent
  },
  {
    path:"Culture",
    component:CultureComponent
  },
  {
    path:"Openings",
    component:OpeningsComponent
  },
  {
    path:"Service_Page",
    component:Service_PageComponent
  },
  {
    path:"Login",
    component:LoginComponent
  },
  {
    path:"ForgotPass",
    component:ForgotPassComponent

  },
  {
    path:"Register",
    component:RegisterComponent
  },

  {
    path:"Emp-Page",
    component:Emp_HomeComponent

  },
  {
    path:"Emp_Attendance",
    component:Emp_AttendanceComponent
  },
  {
    path:"Emp_Leave",
    component:Emp_LeaveComponent
  },
  {
    path:"Emp_WorkStatus",
    component:Emp_WorkStatusComponent
  },
  
  {
    path:"Emp_cPass",
    component:Emp_cPassComponent
  },
  {
    path:"Admin-Page",
    component:Admin_HomeComponent
  },
  {
    path:"Admin_Home",
    component:Admin_HomeComponent
  },
  // {
  //   path:"notification",
  //   component:Admin_NotificationComponent
  // },
  {
    path:"Admin_Notification",
    component:Admin_NotificationComponent
  },
  {
    path:"Admin_Work",
    component:Admin_WorkComponent
  },
  {
    path:"Admin_Dashboard",
    component:Admin_DashboardComponent
  },
  {
    path:"Admin_Leave",
    component:Admin_leaveComponent
  },
  {
    path:"Admin_Details",
    component:Admin_DetailsComponent
  },{
    path:"Admin_Attendance",
    component:Admin_AttendanceComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
