import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {Button} from "primeng/button";
import {Password} from "primeng/password";
import {InputText} from "primeng/inputtext";
import {Card} from "primeng/card";
import {IftaLabel} from "primeng/iftalabel";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    Button,
    Password,
    InputText,
    Card,
    IftaLabel,
    RouterLink
  ],
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  authService = inject(AuthService);

  loginForm: FormGroup | undefined;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    const { username, password } = this.loginForm!.value;

    /*this.authService.login(username, password).subscribe({
      next: (response) => {
        alert('Login successful!');
        localStorage.setItem('token', response.accessToken);
        localStorage.setItem('token-expiration', response.tokenExpiration.toString());
        this.router.navigate(['/records']);
      },
      error: (err) => {
        alert('Invalid login credentials!');
      },
      complete: () => {

      },
    });*/


    alert('Login successful!');
    localStorage.setItem('token', 'mock-token-dyausaaivn')
    this.router.navigate(['/records']);
  }
}
