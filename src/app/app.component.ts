import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <header>
      <nav>
        <a routerLink="/items">Items</a>
        <a routerLink="/login">Login</a>
        <a routerLink="/signup">Signup</a>
      </nav>
    </header>
    <main>
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent {}
