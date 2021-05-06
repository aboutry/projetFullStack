import { role } from './../../../common/enums/role.enum';
import { MeService } from 'src/app/services/auth/me.service';
import { AuthService } from '../../../services/auth/auth.service';
import { Auth } from './../../../common/models/auth.model';
import { Me } from './../../../common/models/me.model';
import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss'],
  providers: [AuthService]
})
export class LoginButtonComponent implements OnInit {
  @Input() me$!: Observable<Me | null>;
  constructor(
    public dialog: MatDialog,
    private authService: AuthService,
    private meService: MeService
  ) {}

  ngOnInit(): void {}

  public openModal(content: TemplateRef<String>): void {
    this.dialog.open(content);
  }

  public closeModal(): void {
    this.dialog.closeAll();
  }

  public handleLogin(auth: Auth): void {
    this.authService.login(auth).subscribe(() => this.dialog.closeAll());
  }

  public handleLogout(): void {
    this.meService.logout();
  }

  public isAdmin(userRole: role | string | undefined) {
    return userRole == 'ADMIN';
  }
}
