import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ITeams } from '../teams';
import * as fromTeam from '../state/team.reducer';
import {
  TeamLoad,
  MarkAsFavoutite,
  CityFilter
} from '../state/team.actions';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams$: Observable<ITeams[]>;
  constructor(private store: Store<fromTeam.State>) { }

  ngOnInit() {
    this.store.dispatch(TeamLoad());

    this.teams$ = this.store.pipe(select(fromTeam.getTeamlist));
  }

  markAsFav(team: ITeams) {
    this.store.dispatch(MarkAsFavoutite({ team }));
  }

  applyFilter(currentCity: string) {
    this.store.dispatch(CityFilter({ city: currentCity }));

    this.teams$ = this.store.pipe(select(fromTeam.getCurrentTeam));

  }

}
