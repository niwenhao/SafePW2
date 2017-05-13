import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PasswordModelService } from '../../services/password-model.service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private pwdModel: PasswordModelService) {
  }

}
