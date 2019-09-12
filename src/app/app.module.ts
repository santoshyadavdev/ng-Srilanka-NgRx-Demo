import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule, MatButtonModule,
  MatSidenavModule, MatIconModule,
  MatListModule, MatSelectModule
} from '@angular/material';
import { TeamsComponent } from './teams/teams/teams.component';
import { TeamsListComponent } from './teams/teams-list/teams-list.component';
import { MyTeamsComponent } from './teams/my-teams/my-teams.component';
import { MainNavComponent } from './main-nav/main-nav.component';

import { reducer, TeamsEffect } from './teams/state';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { CityFilterComponent } from './teams/city-filter/city-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    TeamsListComponent,
    MyTeamsComponent,
    MainNavComponent,
    CityFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ team: reducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([TeamsEffect]),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
