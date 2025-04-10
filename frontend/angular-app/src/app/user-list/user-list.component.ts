import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users = [
    { id: 1, login: 'JohnDoe', password: 'password123' },
    { id: 2, login: 'JaneSmith', password: 'securepass456' },
    { id: 3, login: 'AliceJohnson', password: 'mypassword789' }
  ];

  constructor(private router: Router) {}

  navigateToLogin() {
    this.router.navigate(['/']);
}
}
