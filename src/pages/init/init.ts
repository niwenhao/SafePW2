import { Component, AfterViewInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PasswordModelService } from '../../services/password-model.service';

/**
 * View for app starting
 * 
 * - Function
 *   - Ite will check whether there has a password file.
 *   - If exists, shift to logon page.
 *   - If Not, shift to init the password.
 * - Template -> init.html
 * - Selector -> page-init
 */
@Component({
  selector: 'page-init',
  templateUrl: 'init.html'
})
export class InitPage implements AfterViewInit {

  constructor(private navCtrl: NavController, private pwdModel: PasswordModelService) {
  }

  /**
   * Test the password file exists.
   * Move to logon page if exists.
   * Move to password initialize page on other case.
   */
  ngAfterViewInit() {
    if (this.pwdModel.isTherePWFile()) {

    } else {
      this.navCtrl.push(InitPasswordPage);
    }
  }

}

/**
 * Page to initialize password.
 */
@Component({
  templateUrl: 'page-init-password.html'
})
export class InitPasswordPage {
  password1st: string;
  password2nd: string;
}

/**
 * Page to initialize pattern which be required to show parameters of a site.
 */
@Component({
  templateUrl: 'page-init-pattern.html'
})
export class InitPatternPage {

}