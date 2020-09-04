import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap
} from '@ngrx/store';

import * as fromGhostShips from './reducers';


export const selectGhostshipsState = createFeatureSelector<fromGhostShips.GhostShipsFeatureState>(
  fromGhostShips.GhostShips_featureKey
);

export const selectShips = createSelector(
  selectGhostshipsState,
  state => state.ships
);
export const getAllGhostShips = createSelector(selectShips, fromGhostShips.getAllGhostShips);
export const getAllGhostShipsWithId = createSelector(getAllGhostShips, allGhostShips => {
  if (allGhostShips && allGhostShips.length > 0) {
    allGhostShips.forEach(s => {
      const regex = new RegExp(/.*\/(\d+)\/$/g);
      const match = regex.exec(s.url);
      if (match.length > 1) {
        s.id = +match[1];
      }
    });
  }
  return allGhostShips;
});
export const getCurrentGhostShip = createSelector(
  getAllGhostShipsWithId,
  (ships) => {
    const id = 1;
    if (id >= 0) {
      return ships.find(s => s.id === id);
    }

    return null;
  }
);
