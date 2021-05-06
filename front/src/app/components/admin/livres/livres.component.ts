import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Livre } from 'src/app/common/models/livre.model';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/admin/admin.service';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.scss']
})
export class LivresComponent implements OnInit {
  livres$: Observable<Livre[] | null> = this.adminService.getListeLivre();
  @ViewChild(MatTable) table!: MatTable<any>;
  selectedBook: Livre | null;

  public displayedColumns: string[] = [
    'titre',
    'auteur',
    'nb_de_page',
    'prix',
    'note',
    'action'
  ];

  constructor(public dialog: MatDialog, private adminService: AdminService) {
    this.selectedBook = null;
  }

  ngOnInit(): void {
    this.adminService.getLivres();
  }

  public openModalEdit(content: TemplateRef<String>, userToEdit: Livre): void {
    this.selectedBook = userToEdit;
    this.dialog.open(content);
  }

  public openModalRemove(
    content: TemplateRef<String>,
    bookToRemove: Livre
  ): void {
    this.selectedBook = bookToRemove;
    const dialogRef = this.dialog.open(content);
    dialogRef.afterClosed().subscribe((result) => {
      if (result && this.selectedBook?.id) {
        this.remove(this.selectedBook.id);
      }
    });
  }

  public remove(index: number): void {
    this.adminService.removeLivre(index);
    this.table.renderRows();
  }

  public closeModal(und: void): void {
    this.dialog.closeAll();
  }
}
