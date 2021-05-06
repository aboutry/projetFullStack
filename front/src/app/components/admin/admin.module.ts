import { AdminRoutingModule } from './admin-routing.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivresComponent } from './livres/livres.component';
import { ClientsComponent } from './clients/clients.component';
import { AdminComponent } from './admin.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { EditComponent } from './clients/edit/edit.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    LivresComponent,
    ClientsComponent,
    AdminComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    RouterModule
  ]
})
export class AdminModule {}
