import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {StationDetailComponent} from './station-detail/station-detail.component';
import {StationListComponent} from './station-list/station-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'stations', redirectTo: 'stations/name', pathMatch: 'full'},
  { path: 'stations/:sortOrder', component: StationListComponent },
  { path: 'station/', redirectTo: 'stations/name', pathMatch: 'full'},
  { path: 'station/:sortOrder', redirectTo: 'stations/name', pathMatch: 'full'},
  { path: 'station/:sortOrder/:id', component: StationDetailComponent },
 ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
