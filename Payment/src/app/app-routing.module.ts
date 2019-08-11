import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ThanksComponent } from './thanks/thanks.component';
const routes: Routes = [
  { path: '',  component: MainComponent, pathMatch: 'full' },
  { path: 'thankYouPage', component: ThanksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
