import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  showWarning = false;

  constructor(private router: Router) {}

  onSubmit(event: Event) {
    event.preventDefault();

    const loginInput = (document.getElementById('login') as HTMLInputElement);
    const passwordInput = (document.getElementById('password') as HTMLInputElement);

    if (!loginInput.value.trim() || !passwordInput.value.trim()) {
        this.showWarning = true;
        return;
    }

    this.showWarning = false;

    const formData = {
        login: loginInput.value,
        password: passwordInput.value
    };

    console.log(JSON.stringify(formData));
  }

  navigateToUserList() {
    this.router.navigate(['/user-list']);
  }
}
