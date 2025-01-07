import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../auth.service";
import {DropdownModule} from "primeng/dropdown";
import {Password} from "primeng/password";
import {IftaLabel} from "primeng/iftalabel";
import {InputText} from "primeng/inputtext";
import {Button} from "primeng/button";
import {Role} from "../models/create-user.dto";

@Component({
  selector: 'app-register',
  imports: [
    ReactiveFormsModule,
    DropdownModule,
    Password,
    IftaLabel,
    InputText,
    Button,
    RouterLink
  ],
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  registerForm: FormGroup;
  loading = false;
  errorMessage: string | null = null;
  roleOptions = [{label: 'Patient', value: 0}, {label: 'Doctor', value: 1}, {label: 'Nurse', value: 2}, {label: 'EmergencyResponder', value: 3}];

  private readonly authService = inject(AuthService);

  constructor(
      private fb: FormBuilder,
      private router: Router
  ) {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(100),
          Validators.pattern(
              /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
          ),
        ],
      ],
      role: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.errorMessage = null;

    this.authService.register(this.registerForm.value).subscribe({
      next: (response) => {
        alert('Registration successful!');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.errorMessage = err.error?.Message || 'Registration failed. Please try again.';
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
}
