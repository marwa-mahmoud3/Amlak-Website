import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LoginComponent } from '../login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OwnersAssociationComponent } from './components/owners-association/owners-association.component';
import { GroupChatComponent } from './components/group-chat/group-chat.component';
import { SettingsComponent } from './components/settings/settings.component';
import { UsersComponent } from './components/users/users.component';
import { ContactComponent } from './components/contact/contact.component';
import { CollectionMoneyComponent } from './components/collection-money/collection-money.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    title: 'titles.adminLoginTitle'
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: "full",
    title: 'titles.adminDashboardTitle'
  }, 
  { 
    path: '', 
    component : AdminComponent,
    children : [
    
      {
        path: 'dashboard',
        component: DashboardComponent,
        title: 'titles.adminDashboardTitle'
      },
      {
        path: 'owners-association',
        component: OwnersAssociationComponent,
        title: 'titles.adminOwnersAssociationTitle'
      },
      {
        path: 'group-chat',
        component: GroupChatComponent,
        title: 'titles.adminGroupChatTitle'
      },
      {
        path: 'settings',
        component: SettingsComponent,
        title: 'titles.adminSettingTitle'
      },
      {
        path: 'users',
        component: UsersComponent,
        title: 'titles.adminUsersTitle'
      },
      {
        path: 'contact',
        component: ContactComponent,
        title: 'titles.adminContactTitle'
      },
      {
        path: 'collection-money',
        component: CollectionMoneyComponent,
        title: 'titles.adminCollectionMoneyTitle'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
