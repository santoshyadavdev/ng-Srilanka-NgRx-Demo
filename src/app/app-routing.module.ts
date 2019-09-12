import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './teams/teams/teams.component';
import { MyTeamsComponent } from './teams/my-teams/my-teams.component';

const routes: Routes = [
  { path: 'teams', component: TeamsComponent },
  { path: 'my-teams', component: MyTeamsComponent },
  {
    path: 'product', loadChildren: () => import('./product/product.module')
      .then(module => module.ProductModule)
  },
  { path: '', redirectTo: 'teams', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
