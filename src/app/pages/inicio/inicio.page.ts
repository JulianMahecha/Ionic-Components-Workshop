import { Observable } from 'rxjs';
import { DataService } from './../../services/data.service';
import { Componente } from '../../interfaces/interfaces';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Observable<Componente[]>;

  constructor(private menuCtlr : MenuController, private dataService : DataService) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOptions();
  }

  toggleMenu() {
    this.menuCtlr.toggle();
  }

}


