import { Usuario } from '../views/login/usuario';
import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario) {
    if(usuario.nome === 'usuario@email.com' &&
    usuario.senha === '123456') {
      this.usuarioAutenticado = true 

      this.router.navigate(['/calculator'])

      } else {
        this.usuarioAutenticado = false
      }
    }    
    usuarioEstaAutenticado(){
      return this.usuarioAutenticado
    }
  
  }