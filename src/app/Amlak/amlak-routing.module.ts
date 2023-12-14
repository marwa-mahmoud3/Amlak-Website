import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './Components/profile/profile.component';
import { ServicesComponent } from './Components/services/services.component';
import { UnitsComponent } from './Components/units/units.component';
import { UnitDetailsComponent } from './Components/unit-details/unit-details.component';
import { CartComponent } from './Components/cart/cart.component';
import { LoginComponent } from './Components/auth/components/login/login.component';
import { SignUpComponent } from './Components/auth/components/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: "full"
  }, 
  { 
    path: 'home', 
    loadChildren: () => import('./Components/home/home.module').then(m => m.HomeModule),
    title: 'titles.homeTitle',
  },
  { 
    path: '', 
    loadChildren: () => import('./Components/auth/auth.module').then(m => m.AuthModule) 
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'titles.loginTitle'
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    title: 'titles.signUpTitle'
  },
  {
    path : 'profile',
    component : ProfileComponent,
    title: 'titles.profileTitle'
  },
  {
    path : 'services',
    component : ServicesComponent,
    title: 'titles.servicesTitle'
  },
  {
    path : 'units',
    component : UnitsComponent,
    title: 'titles.unitsTitle'
  },
  {
    path : 'unit-details',
    component : UnitDetailsComponent,
    title: 'titles.unitDetailsTitle'
  },
  {
    path : 'cart',
    component : CartComponent,
    title: 'titles.cartTitle'
  },
  { 
    path: 'owners-Association', 
    loadChildren: () => import('./Components/owners-association/owners-association.module').then(m => m.OwnersAssociationModule),
    title: 'titles.ownersAssociationTitle'
  },
  { 
    path: 'blog', 
    loadChildren: () => import('./Components/blog/blog.module').then(m => m.BlogModule),
    title: 'titles.blogTitle'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmlakRoutingModule { }
