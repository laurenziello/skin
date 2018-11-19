import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { NextComponent } from './next/next.component';
import { RaceComponent } from './race/race.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
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
