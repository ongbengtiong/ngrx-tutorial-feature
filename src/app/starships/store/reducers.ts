import { Action, ActionReducerMap } from "@ngrx/store";
import {
  ShipsActions,
  ShipsActionTypes,
  SetShips
} from "./actions";
import { StarShip } from "../../models/star-ship.model";

import * as fromRoot from "../../store/reducers";


export const StarShips_featureKey = 'starships';
export interface StarshipsFeatureState {
  ships: ShipsCollectionState;
}

export interface State extends fromRoot.State {
  [StarShips_featureKey]: StarshipsFeatureState;
}


export interface ShipsCollectionState {
  allShips: StarShip[];
}

const initialState: ShipsCollectionState = {
  allShips: []
};

export function reducer(state = initialState, action: ShipsActions): ShipsCollectionState {
  switch (action.type) {
    case ShipsActionTypes.SetShips:
      return handleSetShips(state, action);

    default:
      return state;
  }
}

function handleSetShips(state, action: SetShips): ShipsCollectionState {
  return {
    ...state,
    allShips: action.payload
  };
}

export const getAllShips = (state: ShipsCollectionState) => state.allShips;
export const reducers: ActionReducerMap<StarshipsFeatureState> = {
  ships: reducer
};
