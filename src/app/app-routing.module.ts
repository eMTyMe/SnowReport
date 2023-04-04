import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {StationDetailComponent} from './station-detail/station-detail.component';
import {StationListComponent} from './station-list/station-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'stations/:sortOrder', component: StationListComponent },
  { path: 'stations', redirectTo: 'stations/name', pathMatch: 'full'},
  { path: 'station/:sortOrder/:code', component: StationDetailComponent },
  { path: 'station/:sortOrder', redirectTo: 'stations/:sortOrder', pathMatch: 'full'},
 ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
