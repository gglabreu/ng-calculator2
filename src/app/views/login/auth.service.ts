import { Usuario } from './usuario';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false

  constructor() { }

  fazerLogin(usuario: Usuario) {
    if(usuario.nome === 'usuario@email.com' &&
    usuario.senha === '123456') {
      this.usuarioAutenticado = true 
      } else {
        this.usuarioAutenticado = false
      }
    }    
  }
