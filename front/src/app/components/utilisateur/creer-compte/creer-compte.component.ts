import { Utilisateur } from './../../../common/models/utilisateur.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreerCompteService } from 'src/app/services/utilisateur/creer-compte.service';

@Component({
  selector: 'app-creer-compte',
  templateUrl: './creer-compte.component.html',
  styleUrls: ['./creer-compte.component.scss']
})
export class CreerCompteComponent implements OnInit {
  formGroup = new FormGroup({
    nom: new FormControl(undefined, Validators.required),
    prenom: new FormControl(undefined, Validators.required),
    email: new FormControl(undefined, Validators.required),
    telephone: new FormControl(undefined, Validators.required),
    password: new FormControl(undefined, Validators.required)
  });

  constructor(private service: CreerCompteService) {}

  ngOnInit(): void {}

  handleSubmit(): void {
    if (this.formGroup.valid) {
      const user: Utilisateur = {
        id: null,
        nom: this.formGroup.controls.nom.value,
        prenom: this.formGroup.controls.prenom.value,
        email: this.formGroup.controls.email.value,
        telephone: this.formGroup.controls.telephone.value,
        password: this.formGroup.controls.password.value,
        role: null
      };
      this.service.createAccount(user);
    }
  }
}
