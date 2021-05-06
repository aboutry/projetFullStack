import { Utilisateur } from './../../../../common/models/utilisateur.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  @Input() user!: Utilisateur;
  @Output() editUser: EventEmitter<Utilisateur> = new EventEmitter();
  @Output() closeModal: EventEmitter<void> = new EventEmitter();

  formGroup = new FormGroup({
    nom: new FormControl(undefined, Validators.required),
    prenom: new FormControl(undefined, Validators.required),
    email: new FormControl(undefined, Validators.required),
    telephone: new FormControl(undefined, Validators.required),
    role: new FormControl(undefined, Validators.required)
  });
  constructor() {}

  close(): void {
    this.closeModal.emit(undefined);
  }

  save(): void {
    if (this.formGroup.valid) {
      this.editUser.emit({
        id: this.user.id,
        nom: this.formGroup.controls.nom.value,
        prenom: this.formGroup.controls.prenom.value,
        email: this.formGroup.controls.email.value,
        telephone: this.formGroup.controls.telephone.value,
        role: this.formGroup.controls.role.value,
        password: this.user.password
      });
    }
  }

  ngOnInit(): void {
    this.formGroup.controls.nom.setValue(this.user.nom);
    this.formGroup.controls.prenom.setValue(this.user.prenom);
    this.formGroup.controls.email.setValue(this.user.email);
    this.formGroup.controls.telephone.setValue(this.user.telephone);
    this.formGroup.controls.role.setValue(this.user.role);
  }
}
