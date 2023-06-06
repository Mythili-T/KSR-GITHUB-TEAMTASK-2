import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMessComponent } from './a-admin/admin-mess/admin-mess.component';
import { Admin_feesComponent } from './a-admin/admin_fees/admin_fees.component';
import { Admin_leaveComponent } from './a-admin/admin_leave/admin_leave.component';
import { Admin_roomComponent } from './a-admin/admin_room/admin_room.component';
import { LeaveformComponent } from './a-admin/leaveform/leaveform.component';
import { LoginCredentialsComponent } from './a-admin/login-credentials/login-credentials.component';
import { StudentsProfileComponent } from './a-admin/students-profile/students-profile.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminCredComponent } from './admin-cred/admin-cred.component';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { HomeComponent } from './home/home.component';
import { Home3Component } from './home3/home3.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './a-user/profile/profile.component';
import { RoomComponent } from './a-user/room/room.component';
import { MessComponent } from './a-user/mess/mess.component';
import { FeesComponent } from './a-user/fees/fees.component';
import { LeaveComponent } from './a-user/leave/leave.component';
import { RoomExchangeComponent } from './a-user/room/room-exchange/room-exchange.component';
import { MyroomComponent } from './a-user/room/myroom/myroom.component';
import { LeaveDetailsComponent } from './a-user/leave/leave-details/leave-details.component';
import { MessMenuComponent } from './a-user/mess/mess-menu/mess-menu.component';
import { MessTimeComponent } from './a-user/mess/mess-time/mess-time.component';
import { LeaveHolidayComponent } from './a-user/leave/leave-holiday/leave-holiday.component';
import { AdminDashComponent } from './a-admin/admin-dash/admin-dash.component';
import { VacatingComponent } from './a-admin/vacating/vacating.component';



const routes: Routes = [
  { path: "", component: Home3Component },
  { path: "Home", component: Home3Component },
  { path: "about", component: AboutUsComponent},
  { path: "contact", component: ContactUsComponent},
  { path: "facilities", component: FacilitiesComponent},
  { path: "login", component: LoginComponent},
  { path: "contactus", component: ContactUsComponent},

  {path:"registerform", component:AdminCredComponent},
  // sidebar

  { path: "logcred", component: AdminCredComponent },
  { path: "Profile", component:StudentsProfileComponent},
  { path: "Room", component: Admin_roomComponent},
  { path: "Fees", component: Admin_feesComponent},
  { path: "leaveform", component: Admin_leaveComponent},
  { path: "Mess", component:AdminMessComponent},
  { path: "admincret", component:AdminCredComponent},
  { path: "vacate", component:VacatingComponent},

  //-user
  { path: "logcred", component: AdminCredComponent },
  { path: "Profile-user", component:ProfileComponent},
  { path: "Room-user", component: RoomComponent},
 { path: "Fees-user", component:FeesComponent },
  { path: "leaveform-user", component:LeaveComponent},
  { path: "Mess-user", component:MessComponent},

  //button My-room
  { path: "My-room", component:MyroomComponent},
  { path: "leave-Check", component:LeaveDetailsComponent},
  { path: "Mess-menu", component:MessMenuComponent},
  { path: "mess-time", component:MessTimeComponent},
  { path: "exchange-room", component:RoomExchangeComponent},
  { path: "holiday", component:LeaveHolidayComponent},
  { path: "dash", component:AdminDashComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
