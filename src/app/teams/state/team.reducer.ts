import {
  on, createFeatureSelector,
  createSelector,
  createReducer
} from '@ngrx/store';

import { ITeams } from '../teams';

import {  TeamsLoadFailure, TeamsLoadSuccess } from './team.actions';

export interface TeamState {
  teams: ITeams[];
  favoutiteTeams: ITeams[];
  currentTeamId: number | null;
}

export interface State {
  teams: TeamState;
}

const initialeState: TeamState = {
  currentTeamId: null,
  favoutiteTeams: [],
  teams: []
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

export const getCurrentTeamId = createSelector(
  getTeamFeatureSelector,
  state => state.currentTeamId
);

export const getCurrentTeam = createSelector(
  getTeamFeatureSelector,
  getCurrentTeamId,
  (state, currentteamId) => {
    if (currentteamId === 0) {
      return {
        id: 0,
        productCode: '',
        productName: '',
        description: '',
        starRating: 0
      };
    } else {
      return currentteamId ? state.teams.find(p => p.id === currentteamId) : null;
    }
  }
);


export const teamReducer = createReducer(
  initialeState,
  on(TeamsLoadSuccess)
)

