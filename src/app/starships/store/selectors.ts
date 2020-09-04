import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap
} from "@ngrx/store";

import * as fromShips from "./reducers";




export const selectStarshipsState = createFeatureSelector<fromShips.StarshipsFeatureState>(
  fromShips.StarShips_featureKey
);

export const selectShips = createSelector(
  selectStarshipsState,
  state => state.ships
);
export const getAllShips = createSelector(selectShips, fromShips.getAllShips);
export const getAllShipsWithId = createSelector(getAllShips, allShips => {
  if (allShips && allShips.length > 0) {
    allShips.forEach(s => {
      const regex = new RegExp(/.*\/(\d+)\/$/g);
      const match = regex.exec(s.url);
      if (match.length > 1) {
        s.id = +match[1];
      }
    });
  }
  return allShips;
});
export const getCurrentShip = createSelector(
  getAllShipsWithId,
  (ships) => {
    const id = 1;
    if (id >= 0) {
      return ships.find(s => s.id === id);
    }

    return null;
  }
);
