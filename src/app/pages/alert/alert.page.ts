import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  inicio: string ='Alert';

  constructor(public alertCtlr: AlertController) {  }

  ngOnInit() {
    
  }
  /* Alerta Normal */
  async presentAlert() {
    const alert = await this.alertCtlr.create({
      header: 'Alerta',
      subHeader: 'Subtitle',
      message: 'Esto es un mensaje de alerta.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Boton Cancelar');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Boton Ok');
          }
        }
      ]
    });
    await alert.present();
  }

  /* Recibiendo información por medio de Prompt */
  async presentPrompt() {
    const alert = await this.alertCtlr.create({
      header: 'Cambia el Titulo',
      subHeader: 'Ingresa un titulo',
      message: ':)',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Boton Cancelar');
          }
        }, {
          text: 'Okay',
          handler: data => {
            this.inicio = data.titulo;
            console.log(data);
          }
        },
      ],
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Cambia el Titulo'
      }
    ]
    });
    
    await alert.present();
  }
}
