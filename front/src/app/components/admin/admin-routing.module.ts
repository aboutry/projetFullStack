import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsLoggedGuard } from 'src/app/common/is-logged.guard';
import { AdminComponent } from './admin.component';
import { ClientsComponent } from './clients/clients.component';
import { LivresComponent } from './livres/livres.component';

const routes: Routes = [
  {
    canActivate: [IsLoggedGuard],
    path: '',
    component: AdminComponent
  },
  {
    canActivate: [IsLoggedGuard],
    path: 'clients',
    component: ClientsComponent
  },
  {
    canActivate: [IsLoggedGuard],
    path: 'livres',
    component: LivresComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
