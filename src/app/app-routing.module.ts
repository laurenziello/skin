import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { RaceComponent } from './race/race.component';
import { NextracesComponent } from './nextraces/nextraces.component';


const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: NextracesComponent },
  { path: 'race/:id', component: RaceComponent },
];

/**
 * Opzioni aggiuntive al routing
 */
const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
