import { CaddyService } from './../../../../services/caddy/caddy.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Livre } from 'src/app/common/models/livre.model';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.scss']
})
export class CarteComponent implements OnInit {
  @Input() livre!: Livre;
  @Output() closeModal: EventEmitter<void> = new EventEmitter();

  constructor(private caddyService: CaddyService) {}

  ngOnInit(): void {}

  addToCaddy(): void {
    this.caddyService.addLivreToCaddy(this.livre);
    this.closeModal.emit(undefined);
  }
}
