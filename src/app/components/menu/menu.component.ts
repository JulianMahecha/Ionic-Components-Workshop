import { Observable } from 'rxjs';
import { Componente } from './../../interfaces/interfaces';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  componentes : Observable<Componente[]>;

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOptions();
  }

}
