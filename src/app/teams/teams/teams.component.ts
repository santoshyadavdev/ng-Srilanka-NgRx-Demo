import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ITeam } from '../teams';
import * as fromTeam from '../state/team.reducer';
import {
  TeamLoad,
  MarkAsFavourite,
  CityFilter
} from '../state/team.actions';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams$: Observable<ITeam[]>;
  error$: Observable<string>;
  constructor(private store: Store<fromTeam.State>) { }

  ngOnInit() {
    this.store.dispatch(TeamLoad());

    this.teams$ = this.store.pipe(select(fromTeam.getTeamlist));
    this.error$ = this.store.pipe(select(fromTeam.getError));
  }

  markAsFav(team: ITeam) {
    this.store.dispatch(MarkAsFavourite({ team }));
  }

  applyFilter(currentCity: string) {
    this.store.dispatch(CityFilter({ city: currentCity }));

    this.teams$ = this.store.pipe(select(fromTeam.getCurrentTeam));

  }

}
