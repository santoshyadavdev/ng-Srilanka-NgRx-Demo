
import { createAction, props } from '@ngrx/store';
import { ITeams } from '../teams';


export const TeamLoad = createAction('[Teams] Get Teams');
export const TeamsLoadSuccess = createAction('[Teams] Get Teams Success',
  props<{ teams: ITeams[] }>());
export const TeamsLoadFailure = createAction('[Teams] Get Teams Failure',
  props<{ error: string }>());
export const MarkAsFavoutite = createAction('[Teams] Mark As Favourite',
  props<{ team: ITeams }>());
export const GetMyTeams = createAction('[Teams] Get My Teams');
