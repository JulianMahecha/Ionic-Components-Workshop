import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  nombre: string;
  apellido: string;

  usuario = {
    email : '',
    password: '',
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmitTemplate(){
    console.log('Form Submit');
    console.log(this.usuario);
  }

}
