import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  standalone: true,
  imports: [CommonModule, FormsModule] 
})
export class LoginComponent {

  usuario: string = '';
  password: string = '';
  error: string = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login(this.usuario, this.password).subscribe({
      next: (user: any) => {
          console.log(user); // para  ver si manda el nombre
          this.router.navigate(['/rol'], {
            queryParams: { usuario: user.usuario, rol: user.role }
          });
      },
      error: () => {
        this.error = 'Usuario o contraseña incorrectos';
    }
    });
  }
}
