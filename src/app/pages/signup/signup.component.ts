import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name = '';
  email = '';
  password = '';
  error = '';
  success = '';
  loading = false;

  constructor(private auth: AuthService, private router: Router) {}

  onSignup() {
    if (!this.name || !this.email || !this.password) return;
    this.loading = true;
    this.error = '';
    this.success = '';

    this.auth.signup(this.name, this.email, this.password).subscribe({
      next: () => {
        this.loading = false;
        this.success = 'Account erstellt! Du bist offiziell im System 🎉';
        setTimeout(() => this.router.navigate(['/login']), 1500);
      },
      error: () => {
        this.loading = false;
        this.error = 'Signup failed. Vielleicht existiert die Mail schon?';
      }
    });
  }
}
