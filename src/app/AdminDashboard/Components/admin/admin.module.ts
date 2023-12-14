import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from '../login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterAdminComponent } from '../../Shared/footer-admin/footer-admin.component';
import { AdminComponent } from './admin.component';
import { HeaderAdminComponent } from '../../Shared/header-admin/header-admin.component';
import { SidebarComponent } from '../../Shared/sidebar/sidebar.component';
import { OwnersAssociationComponent } from './components/owners-association/owners-association.component';
import { GroupChatComponent } from './components/group-chat/group-chat.component';
import { SettingsComponent } from './components/settings/settings.component';
import { UsersComponent } from './components/users/users.component';
import { ContactComponent } from './components/contact/contact.component';
import { CollectionMoneyComponent } from './components/collection-money/collection-money.component';
import { SharedModule } from 'src/app/Amlak/shared.module';


@NgModule({
  declarations: [
    LoginComponent,
    AdminComponent,
    DashboardComponent,
    FooterAdminComponent,
    HeaderAdminComponent,
    SidebarComponent,
    OwnersAssociationComponent,
    GroupChatComponent,
    SettingsComponent,
    UsersComponent,
    ContactComponent,
    CollectionMoneyComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
