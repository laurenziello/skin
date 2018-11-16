import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { NextComponent } from './next/next.component';
import { RaceComponent } from './race/race.component';


const routes: Routes = [
  { path: '', redirectTo: '/next', pathMatch: 'full' },
  { path: 'next', component: NextComponent },
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
