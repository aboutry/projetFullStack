import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { CreerCompteComponent } from './creer-compte/creer-compte.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CreerCompteComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  exports: []
})
export class UtilisateurModule {}
