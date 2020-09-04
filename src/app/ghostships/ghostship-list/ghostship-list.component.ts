import { StarShip } from "src/app/models/star-ship.model";
import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import * as fromStore from "../store/reducers";
import * as fromRoot from "src/app/store/reducers";
import { LoadGhostShips } from "../store/actions";
import { getAllGhostShipsWithId } from "../store/selectors";

@Component({
  selector: "app-ghostship-list",
  templateUrl: "./ghostship-list.component.html",
  styleUrls: ["./ghostship-list.component.css"]
})
export class GhostShipListComponent implements OnInit {
  starships$: Observable<StarShip[]>;
  user$: Observable<string>;

  constructor(private store: Store<fromStore.State>) { }

  ngOnInit() {
    this.starships$ = this.store.select(getAllGhostShipsWithId);
    this.user$ = this.store.select(fromRoot.getFriendlyName);

    this.store.dispatch(new LoadGhostShips());
  }
}
