import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import * as fromStore from "../store/reducers";
import { StarShip } from "../../models/star-ship.model";

@Component({
  selector: "app-ghostship-detail",
  templateUrl: "./ghostship-detail.component.html",
  styleUrls: ["./ghostship-detail.component.css"]
})
export class GhostShipDetailComponent implements OnInit {
  starShip$: Observable<StarShip>;

  constructor(private store: Store<fromStore.State>) {}

  ngOnInit() {
    this.starShip$ = this.store.select(fromStore.getCurrentGhostShip);
  }
}
