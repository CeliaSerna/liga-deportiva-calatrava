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
    const datosLogin = {
    email: this.usuario, 
    password: this.password
    };

    this.auth.login(datosLogin).subscribe({
      next: (res: any) => {
        // Guarda el token para usarlo en otras peticiones
          localStorage.setItem('token', res.token);
          //console.log('¡Login exitoso!', res);
          this.router.navigate(['/rol'], {
            queryParams: { usuario: res.user.name, rol: res.user.role }// nombres de las columnas en la base de datos
          });
      },
      error: (err) => {
        console.error(err);
        this.error = 'Usuario o contraseña incorrectos';
    }
    });
  }
}
