import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app';
  showWarning = false;

  constructor(private router: Router) {}

  onSubmit(event: Event) {
    event.preventDefault(); // Prevent the default form submission behavior

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
