import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MenuBarComponent } from './menuBar/menuBar.component';
import { SideBarComponent } from './SideBar/SideBar.component';
import { AdminMessComponent } from './a-admin/admin-mess/admin-mess.component';
import { StudentsProfileComponent } from './a-admin/students-profile/students-profile.component';
import { Home2Component } from './home2/home2.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { Admin_feesComponent } from './a-admin/admin_fees/admin_fees.component';
import { Admin_leaveComponent } from './a-admin/admin_leave/admin_leave.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { Admin_roomComponent } from './a-admin/admin_room/admin_room.component';
import { FeesComponent } from './a-user/fees/fees.component';
import { RoomComponent } from './a-user/room/room.component';
import { MessComponent } from './a-user/mess/mess.component';
import { Home3Component } from './home3/home3.component';
import { Hom3_navComponent } from './hom3_nav/hom3_nav.component';
import { Home3_footerComponent } from './home3_footer/home3_footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginCredentialsComponent } from './a-admin/login-credentials/login-credentials.component';
import { AdminCredComponent } from './admin-cred/admin-cred.component';
import { LeaveformComponent } from './a-admin/leaveform/leaveform.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsComponent } from './forms/forms.component';
import { AdminDashComponent } from './a-admin/admin-dash/admin-dash.component';
import { UserSidebarComponent } from './a-user/user-sidebar/user-sidebar.component';
import { LeaveComponent } from './a-user/leave/leave.component';
import { MyroomComponent } from './a-user/room/myroom/myroom.component';
import { RoomExchangeComponent } from './a-user/room/room-exchange/room-exchange.component';
import { MessMenuComponent } from './a-user/mess/mess-menu/mess-menu.component';
import { MessTimeComponent } from './a-user/mess/mess-time/mess-time.component';
import { LeaveHolidayComponent } from './a-user/leave/leave-holiday/leave-holiday.component';
import { LeaveDetailsComponent } from './a-user/leave/leave-details/leave-details.component';
import { ProfileComponent } from './a-user/profile/profile.component';
import { VacatingComponent } from './a-admin/vacating/vacating.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
      HomeComponent,
      MessComponent,
      MenuBarComponent,
      SideBarComponent,
      AdminMessComponent,
      StudentsProfileComponent,
      Home2Component,
      NavComponent,
      FooterComponent,
      Admin_feesComponent,
      Admin_leaveComponent,
      FacilitiesComponent,
      AboutUsComponent,
      Admin_roomComponent,FeesComponent,RoomComponent,
      Home3Component,
      Hom3_navComponent,
      Home3_footerComponent,
      ContactUsComponent,
      LoginCredentialsComponent,
      AdminCredComponent,LeaveformComponent,
      FormsComponent,
      AdminDashComponent,
      UserSidebarComponent,
      LeaveComponent,
      MyroomComponent,
      RoomExchangeComponent,
      MessMenuComponent,
      MessTimeComponent,
      LeaveHolidayComponent,
      LeaveDetailsComponent,
      ProfileComponent,
      VacatingComponent


   ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule,HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
