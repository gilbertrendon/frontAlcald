import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FlightlistComponent} from './flightlist/flightlist.component';

const routes: Routes = [
  {path:'',component:FlightlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
