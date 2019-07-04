import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';

import { mergeMap, map, catchError } from 'rxjs/operators';
import { ITeams } from '../teams';
import { of } from 'rxjs';
import { TeamService } from './team.service';
import { TeamLoad, TeamsLoadSuccess, TeamsLoadFailure } from './team.actions';

@Injectable()
export class TeamsEffect {

  constructor(
    private actions$: Actions,
    private teamService: TeamService
  ) { }

  getTeams$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TeamLoad),
      mergeMap(() => this.teamService.getTeamList().pipe(
        map((teamList: ITeams[]) => TeamsLoadSuccess({ teams: teamList })),
        catchError((err) => of(TeamsLoadFailure({ error: err })))
      )
      )
    )
  );
}
