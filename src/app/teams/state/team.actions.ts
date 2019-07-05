
import { createAction, props } from '@ngrx/store';
import { ITeam } from '../teams';


export const TeamLoad = createAction('[Teams] Get Teams');
export const TeamsLoadSuccess = createAction('[Teams] Get Teams Success',
  props<{ teams: ITeam[] }>());
export const TeamsLoadFailure = createAction('[Teams] Get Teams Failure',
  props<{ error: string }>());
export const MarkAsFavoutite = createAction('[Teams] Mark As Favourite',
  props<{ team: ITeam }>());
export const GetMyTeams = createAction('[Teams] Get My Teams');
export const CityFilter = createAction('[Teams] Filter By City',
  props<{ city: string }>());
