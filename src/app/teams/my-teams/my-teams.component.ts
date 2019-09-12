import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ITeam } from '../teams';
import * as fromTeam from '../state/team.reducer';
import { GetMyTeams } from '../state/team.actions';

@Component({
  selector: 'app-my-teams',
  templateUrl: './my-teams.component.html',
  styleUrls: ['./my-teams.component.css']
})
export class MyTeamsComponent implements OnInit {

  myTeam$: Observable<ITeam[]>;
  displayedColumns = ['id', 'full_name', 'city', 'conference', 'division'];

  constructor(private store: Store<fromTeam.TeamState>) { }

  ngOnInit() {
    this.store.dispatch(GetMyTeams());

    this.myTeam$ = this.store.pipe(select(fromTeam.getFavouriteTeamList));
  }


}
