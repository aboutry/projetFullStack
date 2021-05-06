import { CommandeService } from './../../services/commande/commande.service';
import { Caddy, caddyToDto } from './../../common/models/caddy.model';
import { Component, OnInit } from '@angular/core';
import { CaddyService } from 'src/app/services/caddy/caddy.service';

@Component({
  selector: 'app-caddy',
  templateUrl: './caddy.component.html',
  styleUrls: ['./caddy.component.scss']
})
export class CaddyComponent implements OnInit {
  localCaddy: Caddy | null = this.caddyService.getCaddy();
  constructor(
    private caddyService: CaddyService,
    private commandeService: CommandeService
  ) {}

  ngOnInit(): void {}

  deleteCaddy(): void {
    this.caddyService.clearCaddy();
    this.localCaddy = this.caddyService.getCaddy();
  }

  sendCaddy(): void {
    if (this.localCaddy) {
      this.commandeService.createCommande(this.localCaddy);
    }
  }
}
