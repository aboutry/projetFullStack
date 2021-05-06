import { genre } from './../../../common/enums/genre.enum';
import { LivreService } from './../../../services/catalogue/livre.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Livre } from 'src/app/common/models/livre.model';

@Component({
  selector: 'app-creer-livre',
  templateUrl: './creer-livre.component.html',
  styleUrls: ['./creer-livre.component.scss']
})
export class CreerLivreComponent implements OnInit {
  formGroup = new FormGroup({
    titre: new FormControl(undefined, Validators.required),
    couverture: new FormControl(undefined, Validators.required),
    auteur: new FormControl(undefined, Validators.required),
    editeur: new FormControl(undefined, Validators.required),
    genre: new FormControl(undefined, Validators.required),
    description: new FormControl(undefined, Validators.required),
    date_de_publication: new FormControl(undefined, Validators.required),
    nb_de_page: new FormControl(undefined, Validators.required),
    prix: new FormControl(undefined, Validators.required),
    isbn: new FormControl(undefined, Validators.required),
    note: new FormControl(undefined, Validators.required),
    evaluation: new FormControl(undefined, Validators.required),
    vendeur: new FormControl()
  });
  constructor(private livreService: LivreService) {}

  ngOnInit(): void {}

  handleSubmit(): void {
    if (this.formGroup.valid) {
      const livre: Livre = {
        id: null,
        titre: this.formGroup.controls.titre.value,
        couverture: this.formGroup.controls.couverture.value,
        auteur: this.formGroup.controls.auteur.value,
        editeur: this.formGroup.controls.editeur.value,
        genre: genre.AVENTURE,
        description: this.formGroup.controls.description.value,
        date_de_publication: this.formGroup.controls.date_de_publication.value,
        nb_de_page: Number(this.formGroup.controls.nb_de_page.value),
        prix: Number(this.formGroup.controls.prix.value),
        isbn: this.formGroup.controls.isbn.value,
        note: Number(this.formGroup.controls.note.value),
        evaluation: this.formGroup.controls.evaluation.value,
        nom_vendeur: this.formGroup.controls.vendeur.value || 'Site',
        vendeur: null
      };
      this.livreService.createLivre(livre);
    }
  }
}
