import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
//import { convertMetaToOutput } from '@angular/compiler/src/render3/util';
import { ContatoComponent } from '../contato/contato.component';
//import { Validators } from '@angular/forms';

@Component ({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit{
    formContato: FormGroup;

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.createForm(new ContatoComponent());
    }

    createForm(contato: ContatoComponent) {
        this.formContato = this.fb.group({
            nome: [contato.nome],
            email: [contato.email],
            telefone: [contato.telefone],
            dataNascimento: [contato.dataNascimento]
        })
    }

    onSubmit() {
        console.log(this.formContato.controls);
        //this.createForm(new ContatoComponent());
        
    }
       
}