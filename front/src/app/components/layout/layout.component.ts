import { MeService } from '../../services/auth/me.service';
import { Me } from './../../common/models/me.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  me$: Observable<Me | null> = this.meService.getMe();

  constructor(private meService: MeService) {}

  ngOnInit(): void {}
}
