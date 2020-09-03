import { Action } from '@ngrx/store';
import {
  GhostShipsActions,
  GhostShipsActionTypes,
  SetGhostShips
} from '../actions/ghostships.actions';
import { StarShip } from '../../../models/star-ship.model';

export interface State {
  allGhostShips: StarShip[];
}

const initialState: State = {
  allGhostShips: []
};

export function reducer(state = initialState, action: GhostShipsActions): State {
  switch (action.type) {
    case GhostShipsActionTypes.SetGhostShips:
      return handleSetShips(state, action);

    default:
      return state;
  }
}

function handleSetShips(state, action: SetGhostShips): State {
  return {
    ...state,
    allGhostShips: action.payload
  };
}

export const getAllGhostShips = (state: State) => state.allGhostShips;
