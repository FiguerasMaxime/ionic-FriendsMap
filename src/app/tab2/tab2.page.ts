import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalMapComponent } from '../modal-map/modal-map.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss',]
})
export class Tab2Page {

  constructor(public modalController: ModalController, public router: Router) {

  }

  ngOnInit(){
    
  }

  navToCompte(){
    this.router.navigateByUrl('compte');
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalMapComponent,
      cssClass: 'coucou',
      swipeToClose: true, //A GARDER FDP DE NET DE SWIPE !!
    });
    return await modal.present();
  }

}
