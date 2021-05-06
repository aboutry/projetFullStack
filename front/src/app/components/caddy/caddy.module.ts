import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaddyComponent } from './caddy.component';

@NgModule({
  declarations: [CaddyComponent],
  imports: [CommonModule, MatButtonModule]
})
export class CaddyModule {}
