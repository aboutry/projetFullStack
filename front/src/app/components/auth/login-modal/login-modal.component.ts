import { Auth } from './../../../common/models/auth.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  @Output() closeModal: EventEmitter<undefined> = new EventEmitter();
  @Output() emitLogin: EventEmitter<Auth> = new EventEmitter();

  formGroup = new FormGroup({
    email: new FormControl(undefined, Validators.required),
    password: new FormControl(undefined, Validators.required)
  });

  constructor() {}

  ngOnInit(): void {}

  handleLogin(): void {
    if (this.formGroup.valid) {
      const user: Auth = {
        email: this.formGroup.controls.email.value,
        password: this.formGroup.controls.password.value
      };
      this.emitLogin.emit(user);
    }
  }

  handleClose(): void {
    this.closeModal.emit();
  }
}
