import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeComponent } from './liste/liste.component';
import { CarteLightComponent } from './carte/carte-light/carte-light.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CarteComponent } from './carte/carte/carte.component';
import { BrowserModule } from '@angular/platform-browser';
import { CreerLivreComponent } from './creer-livre/creer-livre.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListeComponent,
    CarteLightComponent,
    CarteComponent,
    CreerLivreComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserModule
  ]
})
export class CatalogueModule {}
