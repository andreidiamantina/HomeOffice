import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertController: AlertController) {}

  async exibirAlerta() {
    const alert = await this.alertController.create({
      //mensagem de título
      header: 'Mensagem de Alerta',

      //mensagem que realmente aparece
      message: 'Está é uma mensagem de teste',

      buttons: [
        {
          //texto do botão
          text: 'Cancelar',

          //regra que o botão segue
          role: 'cancel',

          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        },{
          text: 'Sim, executar',
          handler: () => {
            console.log('Confirmar Okay');
          }
        }
      ]
    });

    await alert.present();
  }


}
