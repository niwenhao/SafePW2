import { Component, AfterViewInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PasswordModelService } from '../../services/password-model.service';

@Component({
  selector: 'page-init',
  templateUrl: 'init.html'
})
export class InitPage implements AfterViewInit {

  constructor(public navCtrl: NavController, private pwdModel: PasswordModelService) {
  }

  ngAfterViewInit() {
    if (this.pwdModel.isTherePWFile()) {

    } else {

    }
  }

}

@Component({
  templateUrl: 'page-init-password.html'
})
export class InitPasswordPage {
  password1st: string;
  password2nd: string;
}
