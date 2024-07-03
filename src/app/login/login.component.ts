import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  doLogin() {
    console.log('Username: ' + this.username + ' Password: ' + this.password);
    
    // Adicione aqui a lógica de autenticação

    // Redirecionar para outra página após o login bem-sucedido
    this.router.navigate(['/inicio']);
  }
}
