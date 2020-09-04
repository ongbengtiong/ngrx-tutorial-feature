import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { ShipsActions, ShipsActionTypes } from "./actions";
import { switchMap, map } from "rxjs/operators";
import { StarShip } from "src/app/models/star-ship.model";
import * as shipActions from "src/app/starships/store/actions";
import { of } from "rxjs";

@Injectable()
export class ShipsEffects {
  @Effect()
  loadShips$ = this.actions$.pipe(
    ofType(ShipsActionTypes.LoadShips),
    switchMap(() => {
      const ship1 = new StarShip();
      ship1.url= 'http://asasasa/asd/3/';
      ship1.name = 'Star ship 3';
      return of(new shipActions.SetShips([ship1]));
      // return this.http.get<any>(`https://swapi.co/api/starships`).pipe(
      //   map(response => {
      //     return new shipActions.SetShips(response.results);
      //   })
      // );
    })
  );

  constructor(private actions$: Actions, private http: HttpClient) { }
}
