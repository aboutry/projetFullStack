import { LivreService } from './../../../services/catalogue/livre.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Livre } from 'src/app/common/models/livre.model';
import { genre } from 'src/app/common/enums/genre.enum';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {
  livres$: Observable<Livre[] | null> = this.service.getListeLivre();

  livreSelect!: Livre;

  constructor(public dialog: MatDialog, private service: LivreService) {
    this.service.getLivres();
  }

  public openCard(content: TemplateRef<String>, livre: Livre): void {
    this.livreSelect = livre;
    this.dialog.open(content);
  }

  public closeCard(): void {
    this.dialog.closeAll();
  }

  ngOnInit(): void {}
}
