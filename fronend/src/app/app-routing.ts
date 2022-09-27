import { AddUserComponent } from './users/add-user.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { UsersModule } from './users/users.module';
import { ProtectGuard } from './protect.guard';
import { RouterModule, Routes } from '@angular/router';
import { OfferComponent } from './offer.component';
import { ListOfInsuranceComponent } from './cars/list-insurance.component';
import { HomeComponent } from './home.component';
import { EditUserComponent } from './users/edit-user.component';


const routes: Routes = [
  {path:'', component: OfferComponent},
  {path:'login', component: LoginComponent},
  {path:'insurance', component:ListOfInsuranceComponent},
  {path:'home', component: HomeComponent},
  {path:'users',component:UsersModule},
  {path:'sinup',component:AddUserComponent},
  {path:'users/edit',component:EditUserComponent},
  {path:'cars', loadChildren:()=>import('./cars/cars.module').then(module=>module.CarsModule), canActivate:[ProtectGuard]},
  {path:'policies', loadChildren:()=>import('./policies/policies.module').then(module=>module.PoliciesModule)}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }





