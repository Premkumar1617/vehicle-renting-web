import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class LoginComponent {

  loginService = inject(LoginService);
  router = inject(Router);

  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  });

  onLogin() {
    if (this.loginForm.valid) {
      const userName = this.loginForm.get('userName')?.value ?? '';  // Ensure it's a string
      const password = this.loginForm.get('password')?.value ?? '';
  
      this.loginService.logIn(userName, password).subscribe({
        next: (res: any) => {
          if (res?.statusCode === 200) {
            localStorage.setItem('token', res.data);
            this.router.navigateByUrl('/dashboard'); // Redirect after login
          } else {
            alert(res.data || 'Invalid credentials');
          }
        },
        error: () => {
          alert('Login failed. Please try again.');
        }
      });
    } else {
      alert('Please fill in all fields.');
    }
  }
  
}
