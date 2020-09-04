import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromGhostShips from './store/reducers';
import { GhostShipsEffects } from './store/effects';
import { GhostShipListComponent } from './ghostship-list/ghostship-list.component';
import { GhostShipDetailComponent } from './ghostship-detail/ghostship-detail.component';
import { GhostshipRoutingModule } from './ghostships-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    GhostshipRoutingModule,
    StoreModule.forFeature(fromGhostShips.GhostShips_featureKey, fromGhostShips.reducers),
    EffectsModule.forFeature([GhostShipsEffects])
  ],
  declarations: [GhostShipListComponent, GhostShipDetailComponent]
})
export class GhostshipsModule { }
