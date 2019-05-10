import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList, IonReorderGroup } from '@ionic/angular';


@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})

export class ListReorderPage implements OnInit {

  @ViewChild('lista') lista: IonReorderGroup;

  usuarios=['Master Chief','Locke' , 'Linda', 'Buck', 'Vale'];

  constructor() { }

  ngOnInit() {
  }

  reorder(event){
    const itemMove = this.usuarios.splice(event.detail.from, 1)[0];
    this.usuarios.splice(event.detail.to, 0, itemMove);
    event.detail.complete();
  }

  toggle(){
    this.lista.disabled = this.lista.disabled ? false : true;
  }
}
