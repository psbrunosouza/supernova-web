import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Button } from '../../shared/components/button/button';
import { Input } from '../../shared/components/input/input';

@Component({
  selector: 'app-login',
  imports: [Input, ReactiveFormsModule, Button],
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
      email: ['test', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
}
