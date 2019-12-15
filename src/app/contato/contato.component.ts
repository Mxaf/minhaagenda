import { Component } from '@angular/core';

@Component ({
    selector: 'app-contato',
    templateUrl: './contato.component.html',
    styleUrls: ['./contato.component.css']
})

export class ContatoComponent {
    nome: string = '';
    email: string = '';
    telefone: string = '';
    dataNascimento: Date = null; 
}