import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// pages
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {UnderConstructionComponent} from './under-construction/under-construction.component';

const appRoutes: Routes = [
  {path: '', component: UnderConstructionComponent },
  {path: 'not-found', component: PageNotFoundComponent },
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
