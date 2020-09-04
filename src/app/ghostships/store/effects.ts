import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { GhostShipsActionTypes } from "./actions";
import { switchMap, map } from "rxjs/operators";
import { StarShip } from "src/app/models/star-ship.model";
import * as ghostShipActions from "./actions";
import { of } from "rxjs";

@Injectable()
export class GhostShipsEffects {
  @Effect()
  loadGhostShips$ = this.actions$.pipe(
    ofType(GhostShipsActionTypes.LoadGhostShips),
    switchMap(() => {
      const ship1 = new StarShip();
      ship1.url = 'http://asasasa/asd/3/';
      ship1.name = 'Ghost ship 3';
      return of(new ghostShipActions.SetGhostShips([ship1]));
      // return this.http.get<any>(`https://swapi.co/api/starships`).pipe(
      //   map(response => {
      //     return new ghostShipActions.SetGhostShips(response.results);
      //   })
      // );
    })
  );

  constructor(private actions$: Actions, private http: HttpClient) { }
}
