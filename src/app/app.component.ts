import {Component, inject} from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private router =  inject(Router);

  private readonly TOKEN_KEY = 'lostfound_token';

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigate(['/login']);
  }

  isAdmin(): boolean {
    const token = localStorage.getItem(this.TOKEN_KEY);
    if (!token) return false;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));

      // Falls groups ein Array ist → prüfen ob "Admin" drin ist
      return Array.isArray(payload.groups) && payload.groups.includes('Admin');

    } catch {
      return false;
    }
  }

}
