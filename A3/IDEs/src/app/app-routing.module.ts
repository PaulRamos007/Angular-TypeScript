import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IDEDetailsComponentComponent } from './idedetails-component/idedetails-component.component';
import { IDEsComponentComponent } from './ides-component/ides-component.component';

const routes: Routes = [
  { path: '', component: IDEsComponentComponent },
  { path: 'ides', component: IDEsComponentComponent },
  { path: 'ide/create', component: IDEDetailsComponentComponent },
  { path: 'ide/:id', component: IDEDetailsComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
