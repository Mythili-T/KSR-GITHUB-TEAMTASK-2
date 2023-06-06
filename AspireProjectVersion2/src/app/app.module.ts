import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Register/Register.component';
import { LoginComponent } from './Login/Login.component';
import { HomeComponent } from './Home/Home.component';
import { ShopComponent } from './Shop/Shop.component';
import { WeddingsComponent } from './Weddings/Weddings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { StudioComponent } from './Studio/Studio.component';
import { WeddingDetailsComponent } from './wedding-details/wedding-details.component';
import{HttpClientModule} from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { HeaderComponent } from './Header/Header.component';
import { FooterComponent } from './Footer/Footer.component';
import { AdminComponent } from './Admin/Admin.component';
import { AdminHeaderComponent } from './AdminHeader/AdminHeader.component';
import { AdminViewUserComponent } from './AdminViewUser/AdminViewUser.component';
import { CartComponent } from './Cart/Cart.component';
import { AdminProductsComponent } from './AdminProducts/AdminProducts.component';
import { AdminAddProductsComponent } from './AdminAddProducts/AdminAddProducts.component';
import { CateringComponent } from './catering/catering.component';
import { StudioDetailsComponent } from './Studio-Details/Studio-Details.component';

@NgModule({
  declarations: [	
    AppComponent,
      LoginComponent,
      RegisterComponent,
      LoginComponent,
      HomeComponent,
      ShopComponent,
      WeddingsComponent,
      ContactComponent,
      StudioComponent,
      WeddingDetailsComponent,
      HeaderComponent,
      FooterComponent,
      AdminComponent,
      AdminHeaderComponent,
      AdminViewUserComponent,
      CartComponent,
      AdminProductsComponent,
      AdminAddProductsComponent,
      CateringComponent,
      StudioDetailsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,NgxPaginationModule,ReactiveFormsModule,
    Ng2SearchPipeModule,NgxPaginationModule,Ng2OrderModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
