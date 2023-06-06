import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home.component';
import { AboutComponent } from './About/About.component';
import { ModelsComponent } from './Models/Models.component';
import { LoginComponent } from './Login/Login.component';
import {HttpClientModule} from '@angular/common/http'
import { ExampleComponent } from './example/example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeactivateGuard } from './deactivate.guard';
// import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceComponent } from './Service/Service.component';
import { LoginnewComponent } from './Loginnew/Loginnew.component';
import { RegisternewComponent } from './Registernew/Registernew.component';
import { ServiceloginComponent } from './servicelogin/servicelogin.component';
import { GhostComponent } from './ghost/ghost.component';
import { CullinanComponent } from './cullinan/cullinan.component';
import { PhantomComponent } from './phantom/phantom.component';
import { WraithComponent } from './wraith/wraith.component';
import { DawnComponent } from './dawn/dawn.component';
import { CartComponent } from './cart/cart.component';
import { ModelsregisterComponent } from './Modelsregister/Modelsregister.component';

import { AngularRegisterComponent } from './Angular-register/Angular-register.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailsComponent } from './details/details.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
// import {MatSidenavModule} from '@angular/material/sidenav';
// import {MatToolbarModule} from '@angular/material/toolbar';
// import {MatIconModule} from '@angular/material/icon';
// import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminHomePageComponent } from './AdminHomePage/AdminHomePage.component';
import { LoginDetailsComponent } from './loginDetails/loginDetails.component';
import { ServiceDetailsComponent } from './serviceDetails/serviceDetails.component';
import { OrderDetailsComponent } from './OrderDetails/OrderDetails.component';
import { ProductComponent } from './product/product.component';
import { UserscomponentComponent } from './userscomponent/userscomponent.component';
import { AdminpageheaderComponent } from './adminpageheader/adminpageheader.component';
import { AdminpagesidebarComponent } from './adminpagesidebar/adminpagesidebar.component';
import { AdminpagedashboardComponent } from './Adminpagedashboard/Adminpagedashboard.component';
import { FilterPipe } from './filter.pipe';
import { FilterationnewComponent } from './filterationnew/filterationnew.component';
import {MatTableModule} from '@angular/material/table';

import{MatPaginatorModule}from'@angular/material/paginator';
import{MatSortModule}from'@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule}from'@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ImagesComponent } from './images/images.component';
import { MatCardModule } from '@angular/material/card';
import { CourseComponent } from './course/course.component';
import { ModelGuard } from './model.guard';
import { ModellingService } from './modelling.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { OrderAcceptedPageComponent } from './OrderAcceptedPage/OrderAcceptedPage.component';
import { ButtonfilterComponent } from './buttonfilter/buttonfilter.component';
import { ServiceAcceptedpageComponent } from './serviceAcceptedpage/serviceAcceptedpage.component';
@NgModule({
  declarations: [				
    AppComponent,
      HomeComponent,
      AboutComponent,
      ModelsComponent,
      LoginComponent,
      ExampleComponent,
      HeaderComponent,
      FooterComponent,
      ServiceComponent,
      LoginnewComponent,
      ServiceloginComponent,
      GhostComponent,
      CullinanComponent,
      PhantomComponent,
      WraithComponent,
      DawnComponent,
      CartComponent,
      ModelsregisterComponent,
      RegisternewComponent,

      AngularRegisterComponent,
      DetailsComponent,
      AdminHeaderComponent,
      AdminFooterComponent,
      AdminHomePageComponent,
      LoginDetailsComponent,
      ServiceDetailsComponent,
      OrderDetailsComponent,
      ProductComponent,
      UserscomponentComponent,
      AdminpageheaderComponent,
      AdminpagesidebarComponent,
      AdminpagedashboardComponent,
      FilterPipe,
      FilterationnewComponent,
      ImagesComponent,
      CourseComponent,
      ViewDetailsComponent,
      OrderAcceptedPageComponent,
      ButtonfilterComponent,
      ServiceAcceptedpageComponent
   ],
  imports: [
    BrowserModule,

    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule


  ],
  providers: [DeactivateGuard,ModelGuard,ModellingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
