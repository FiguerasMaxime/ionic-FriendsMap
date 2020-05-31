import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    document.querySelector('ion-tab-bar').style.display = 'none';  
  }

  navToLogin(){
    this.router.navigateByUrl('login');
  }
}
