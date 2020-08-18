import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './UserModule/components/login/login.component';
import { HelpComponent } from './UserModule/components/help/help.component';
import { SearchbarComponent } from './UserModule/components/searchbar/searchbar.component';
import { HeaderComponent } from './UserModule/components/header/header.component';
import { FunctionhallComponent } from './UserModule/components/functionhall/functionhall.component';
import { FunctionhallpageComponent } from './UserModule/components/functionhall/functionhallpage/functionhallpage.component';
import { RegisterComponent } from './UserModule/components/register/register.component';
import { DashboardComponent } from './OwnerModule/components/listyourvenue/dashboard/dashboard.component';
import { LocationComponent } from './OwnerModule/components/listyourvenue/location/location.component';
import { DetailsComponent } from './OwnerModule/components/listyourvenue/details/details.component';
import { SecurityComponent } from './OwnerModule/components/listyourvenue/security/security.component';
import { PaymentComponent } from './OwnerModule/components/listyourvenue/payment/payment.component';
import { PaymentdetailsComponent } from './OwnerModule/components/listyourvenue/paymentdetails/paymentdetails.component';
import { PublishlistingComponent } from './OwnerModule/components/listyourvenue/publishlisting/publishlisting.component';
import { PhotosComponent } from './OwnerModule/components/listyourvenue/photos/photos.component';
import { VerificationComponent } from './OwnerModule/components/listyourvenue/verification/verification.component';
import { PaygateComponent } from './UserModule/components/paygate/paygate.component';

const routes: Routes = [
  {path:'',redirectTo:'/header',pathMatch:'full'},
  { path:'login', component:LoginComponent},
  { path: 'register', component:RegisterComponent},
    
  { path:'help', component:HelpComponent},
  { path: 'dashboard', component:DashboardComponent},
  { path: 'location', component: LocationComponent},
  { path: 'details', component: DetailsComponent},
  { path: 'photos', component: PhotosComponent},
  { path: 'security', component: SecurityComponent},
  { path: 'payment', component: PaymentComponent},
  { path: 'paymentdetails', component: PaymentdetailsComponent},
  { path: 'publishlisting', component: PublishlistingComponent},
  { path:'header',component:HeaderComponent},
  {path: 'searchbar', component: SearchbarComponent},
    
    {path: 'functionhall', component: FunctionhallComponent},
    {path: 'verification', component: VerificationComponent},
    {path: 'paygate', component: PaygateComponent},
  {path:'functionhallpage/:id',component:FunctionhallpageComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }