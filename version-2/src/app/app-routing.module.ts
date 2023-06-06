import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexpageComponent } from './indexpage/indexpage.component';
import { HomepageComponent } from './Homepage/Homepage.component';
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
import { StudentComponent } from './admin/student/student.component';
import { AdminHomepageComponent } from './admin/admin-homepage/admin-homepage.component';

const routes: Routes = [
  {
    path: "Indexpage",
    component: IndexpageComponent
  },
  {
    path: "Homepage",
    component: HomepageComponent
  },
  {
    path: "Profilepage",
    component: ProfileComponent,
    canActivate: [HeaderGuard]
  },
  {
    path: "Loginpage",
    component: LoginpageComponent
  },
  {
    path: "Registerpage",
    component: RegisterComponent
  },
  {
    path: "Forgetpasswordpage",
    component: ForgetpasswordComponent
  },
  {
    path: "Aboutpage",
    component: AboutpageComponent
  },
  {
    path: "Contactpage",
    component: ContactpageComponent,
    canActivate: [HeaderGuard]

  },
  {
    path: "Materialspage",
    component: MaterialspageComponent,
    canActivate: [HeaderGuard]
  },
  {
    path: "CSENotespage",
    component: CSEnotesComponent
  },
  {
    path: "Classpage",
    component: ClassComponent,
    canActivate: [HeaderGuard]
  },
  {
    path: "Admin-Homepage",
    component: AdminHomepageComponent
  },
  {
    path: "Admin-Student",
    component: StudentComponent
  },
  {
    path: "",
    component: IndexpageComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
