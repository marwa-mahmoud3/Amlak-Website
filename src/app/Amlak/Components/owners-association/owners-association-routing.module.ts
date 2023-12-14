import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnersAssociationComponent } from './owners-association.component';

const routes: Routes = [
  { path: '', component: OwnersAssociationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnersAssociationRoutingModule { }
