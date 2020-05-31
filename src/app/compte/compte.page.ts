import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.page.html',
  styleUrls: ['./compte.page.scss'],
})
export class ComptePage implements OnInit {

  constructor(public router: Router) { }

  profil: profil[]= [{nom:"GUERRIER", prenom:"Quentin", id: 32687, img:"./../../assets/imgProfile.svg", distance: 44, events: 18, creatorEvent: 7, friends: 98, recordInvites: 45,}]

  
  ngOnInit() {
    document.querySelector('ion-tab-bar').style.display = 'none';  
  }

  navToMap(){
    this.router.navigateByUrl('accueil')
  }

  navToHome(){
    this.router.navigateByUrl('')
  }

}

interface profil{
  nom: String,
  prenom: String,
  id: Number,
  img: String,
  distance: Number,
  events: Number,
  creatorEvent: Number,
  friends: Number,
  recordInvites: Number,
}

