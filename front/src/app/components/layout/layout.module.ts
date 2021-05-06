import { CaddyModule } from './../caddy/caddy.module';
import { AuthModule } from './../auth/auth.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CatalogueModule } from '../catalogue/catalogue.module';
import { AuthTokenService } from 'src/app/services/auth/auth-token.service';
import { MeService } from 'src/app/services/auth/me.service';
import { UtilisateurModule } from '../utilisateur/utilisateur.module';
import { AdminModule } from '../admin/admin.module';
import { CommandeModule } from '../commande/commande.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
    AdminModule,
    AuthModule,
    UtilisateurModule,
    CommandeModule,
    CatalogueModule,
    CaddyModule
  ],
  exports: [LayoutComponent],
  providers: [AuthTokenService, MeService]
})
export class LayoutModule {}
