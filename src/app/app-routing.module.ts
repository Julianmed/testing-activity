import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArabigoRomanoComponent } from './component/arabigo-romano/arabigo-romano.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/translate',
    pathMatch: 'full'
  },
  {
    path: 'translate',
    component: ArabigoRomanoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
