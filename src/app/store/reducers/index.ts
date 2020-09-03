import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from "@ngrx/store";
import {
  StoreRouterConnectingModule,
  routerReducer,
  RouterReducerState,
  RouterStateSerializer
} from "@ngrx/router-store";

import { environment } from "../../../environments/environment";
import { Params, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";

export interface State {

}

export const reducers: ActionReducerMap<State> = {

};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];


export const getFriendlyName = 'sadasd';


