import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GhostShipListComponent } from './ghostship-list/ghostship-list.component';
import { GhostShipDetailComponent } from './ghostship-detail/ghostship-detail.component';

const ghostStarshipRoutes: Routes = [
  { path: '', component: GhostShipListComponent },
  { path: ':shipId/detail', component: GhostShipDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(ghostStarshipRoutes)],
  exports: [RouterModule]
})
export class GhostshipRoutingModule { }
