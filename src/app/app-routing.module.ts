import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmlakComponent } from './Amlak/amlak.component';

const routes: Routes = [
  { 
    path: '', 
    component: AmlakComponent,
    loadChildren: () => import('./Amlak/amlak.module').then(m => m.AmlakModule) 
  },
  { 
    path: 'admin',
    loadChildren: () => import('./AdminDashboard/Components/admin/admin.module').then(m => m.AdminModule) 
  },
  { path: 'blog', loadChildren: () => import('./Amlak/Components/blog/blog.module').then(m => m.BlogModule) },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
