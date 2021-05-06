import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginButtonComponent } from './login-button/login-button.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { AuthResource } from 'src/app/services/auth/auth.resource';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [LoginButtonComponent, LoginModalComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    AppRoutingModule,
    MatInputModule
  ],
  exports: [LoginButtonComponent, LoginModalComponent],
  providers: [AuthResource]
})
export class AuthModule {}
