import { Action, ActionReducerMap } from '@ngrx/store';
import {
  GhostShipsActions,
  GhostShipsActionTypes,
  SetGhostShips
} from './actions';
import { StarShip } from '../../models/star-ship.model';

import * as fromRoot from '../../store/reducers';
export const GhostShips_featureKey = 'ghostships';

export interface GhostShipCollectionState {
  allGhostShips: StarShip[];
}
const initialState: GhostShipCollectionState = {
  allGhostShips: []
}
export interface GhostShipsFeatureState {
  ships: GhostShipCollectionState;
}
export interface State extends fromRoot.State {
  [GhostShips_featureKey]: GhostShipsFeatureState;
}

export function reducer(state = initialState, action: GhostShipsActions): GhostShipCollectionState {
  switch (action.type) {
    case GhostShipsActionTypes.SetGhostShips:
      return handleSetShips(state, action);

    default:
      return state;
  }
}

function handleSetShips(state, action: SetGhostShips): GhostShipCollectionState {
  return {
    ...state,
    allGhostShips: action.payload
  };
}

export const getAllGhostShips = (state: GhostShipCollectionState) => state.allGhostShips;


export const reducers: ActionReducerMap<GhostShipsFeatureState> = {
  ships: reducer
};
