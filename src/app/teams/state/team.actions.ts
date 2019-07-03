
import { createAction, props } from '@ngrx/store';
import { ITeams } from '../teams';


export const TeamLoad = createAction('[Teams] Get Teams');
export const TeamsLoadSuccess = createAction('[Teams] Get Teams Success', props<{ teams: ITeams[] }>());
export const TeamsLoadFailure = createAction('[Teams] Get Teams Failure');
