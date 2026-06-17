import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Button } from '../../shared/components/button/button';
import { InputPassword } from '../../shared/components/input-password/input-password';
import { Input } from '../../shared/components/input/input';

@Component({
  selector: 'app-login',
  imports: [Input, ReactiveFormsModule, Button, InputPassword],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.initLoginForm();
  }

  initLoginForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
}
