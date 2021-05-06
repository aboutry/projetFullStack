import { AdminService } from './../../../services/admin/admin.service';
import { Utilisateur } from './../../../common/models/utilisateur.model';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  users$: Observable<Utilisateur[] | null> = this.adminService.getListeUser();
  @ViewChild(MatTable) table!: MatTable<any>;

  selectedUser: Utilisateur | null;

  public displayedColumns: string[] = [
    'nom',
    'prenom',
    'email',
    'telephone',
    'role',
    'action'
  ];

  constructor(public dialog: MatDialog, private adminService: AdminService) {
    this.selectedUser = null;
  }

  ngOnInit(): void {
    this.adminService.getUsers();
  }

  public openModalEdit(
    content: TemplateRef<String>,
    userToEdit: Utilisateur
  ): void {
    this.selectedUser = userToEdit;
    this.dialog.open(content);
  }

  public openModalRemove(
    content: TemplateRef<String>,
    userToRemove: Utilisateur
  ): void {
    this.selectedUser = userToRemove;
    const dialogRef = this.dialog.open(content);
    dialogRef.afterClosed().subscribe((result) => {
      if (result && this.selectedUser?.id) {
        this.remove(this.selectedUser.id);
      }
    });
  }

  public remove(index: number): void {
    this.adminService.removeUser(index);
    this.table.renderRows();
  }

  public closeModal(und: void): void {
    this.dialog.closeAll();
  }

  public handleEdit(user: Utilisateur): void {
    this.adminService.editUser(user);
    this.dialog.closeAll();
    this.table.renderRows();
  }
}
