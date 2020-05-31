import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-map',
  templateUrl: './modal-map.component.html',
  styleUrls: ['./modal-map.component.scss'],
})
export class ModalMapComponent implements OnInit {

  constructor() { }

  invites: invites[]= [{nom:"Guerrier", prenom:"Quentin", src:"./../../assets/img1.svg"}, {nom:"Figueras", prenom:"Maxime",src:"./../../assets/img2.svg"}, {nom:"Puech", prenom:"Antoine",src:"./../../assets/img3.svg"}]

  ngOnInit(){

  }

  finish(){
    document.getElementById('cursor').style.display = 'none'; 
  }

}

interface invites{
  nom: String,
  prenom: String,
  src: String,
}
