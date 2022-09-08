import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientcreationComponent } from './clientcreation/clientcreation.component';
import { ClientlistComponent } from './clientlist/clientlist.component';

const routes: Routes = [
  { path: '', redirectTo: '/clients', pathMatch: 'full' },
  { path: 'clients', component: ClientlistComponent },
  { path: 'client/create', component: ClientcreationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
