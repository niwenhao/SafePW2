import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PasswordModelService } from '../../services/password-model.service'

@Component({
  selector: 'page-init',
  templateUrl: 'init.html'
})
export class InitPage {

  constructor(public navCtrl: NavController, private pwdModel: PasswordModelService) {
  }

}
