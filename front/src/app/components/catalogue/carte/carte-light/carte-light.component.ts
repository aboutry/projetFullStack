import { Livre } from './../../../../common/models/livre.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carte-light',
  templateUrl: './carte-light.component.html',
  styleUrls: ['./carte-light.component.scss']
})
export class CarteLightComponent implements OnInit {
  @Input() livre!: Livre;

  constructor() {}

  ngOnInit(): void {}

  note(n: number): Array<number> {
    return Array(n);
  }

  emptyStars(n: number): Array<number> {
    return Array(5 - n);
  }
}
