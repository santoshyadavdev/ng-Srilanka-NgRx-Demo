import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { mergeMap, map, catchError } from 'rxjs/operators';
import { ITeams } from '../teams';
import { of } from 'rxjs';

@Injectable()
export class TeamsService {

  constructor() { }

}