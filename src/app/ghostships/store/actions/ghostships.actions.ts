import { StarShip } from '../../../models/star-ship.model';
import { Action } from '@ngrx/store';

export enum GhostShipsActionTypes {
  LoadGhostShips = '[Ghost Ships] Load Ships',
  SetGhostShips = '[Ghost Ships] Set Ships'
}

export class LoadGhostShips implements Action {
  readonly type = GhostShipsActionTypes.LoadGhostShips;
}

export class SetGhostShips implements Action {
  readonly type = GhostShipsActionTypes.SetGhostShips;

  constructor(public payload: StarShip[]) {}
}

export type GhostShipsActions = LoadGhostShips | SetGhostShips;
