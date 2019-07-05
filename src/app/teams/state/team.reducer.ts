import {
  on, createFeatureSelector,
  createSelector,
  createReducer,
  Action
} from '@ngrx/store';

import { ITeams } from '../teams';

import {
  TeamsLoadFailure,
  TeamsLoadSuccess,
  MarkAsFavoutite,
  CityFilter
} from './team.actions';

export interface TeamState {
  teams: ITeams[];
  favoutiteTeams: ITeams[];
  currentCity: string | null;
  error: string;
}

export interface State {
  teams: TeamState;
}

const initialeState: TeamState = {
  currentCity: null,
  favoutiteTeams: [],
  teams: [],
  error: ''
};

const getTeamFeatureSelector = createFeatureSelector<TeamState>('team');

export const getTeamlist = createSelector(
  getTeamFeatureSelector,
  state => state.teams
);

export const getFavouriteTeamList = createSelector(
  getTeamFeatureSelector,
  state => state.favoutiteTeams
);

export const getCurrentCity = createSelector(
  getTeamFeatureSelector,
  state => state.currentCity
);

export const getCurrentTeam = createSelector(
  getTeamFeatureSelector,
  getCurrentCity,
  (state, currentCity) => {
    return currentCity ? state.teams.filter(p => p.city === currentCity) : null;
  }
);


export const teamReducer = createReducer(
  initialeState,
  on(TeamsLoadSuccess, (state, teams) => ({
    ...state,
    teams: teams.teams,
    error: ''
  })),
  on(TeamsLoadFailure, (state, res) => ({
    ...state,
    teams: [],
    error: res.error
  })),
  on(MarkAsFavoutite, (state, data) => ({
    ...state,
    favoutiteTeams: [...state.favoutiteTeams, data.team]
  })),
  on(CityFilter, (state, data) => ({
    ...state,
    currentCity: data.city
  }))
);


export function reducer(state: TeamState | undefined, action: Action) {
  return teamReducer(state, action);
}
