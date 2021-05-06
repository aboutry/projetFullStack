import { CommandeService } from './../../services/commande/commande.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Commande } from 'src/app/common/models/commande.model';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.scss']
})
export class CommandeComponent implements OnInit {
  commandes$: Observable<
    Commande[] | null
  > = this.commandeService.getListeCommandes();
  constructor(private commandeService: CommandeService) {}

  ngOnInit(): void {
    this.commandeService.getCommande();
  }
}
