import { AdminComponent } from './components/admin/admin.component';
import { CaddyComponent } from './components/caddy/caddy.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeComponent } from './components/catalogue/liste/liste.component';
import { CreerCompteComponent } from './components/utilisateur/creer-compte/creer-compte.component';
import { CreerLivreComponent } from './components/catalogue/creer-livre/creer-livre.component';
import { ClientsComponent } from './components/admin/clients/clients.component';
import { LivresComponent } from './components/admin/livres/livres.component';
import { CommandeComponent } from './components/commande/commande.component';

const routes: Routes = [
  {
    path: '',
    component: ListeComponent
  },
  {
    path: 'create_account',
    component: CreerCompteComponent
  },
  {
    path: 'create_book',
    component: CreerLivreComponent
  },
  {
    path: 'caddy',
    component: CaddyComponent
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./components/admin/admin.module').then(
        (module) => module.AdminModule
      )
  },
  {
    path: 'commande',
    component: CommandeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
