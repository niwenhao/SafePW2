import { Injectable } from '@angular/core'
import { PasswordModel } from '../common-types'

@Injectable()
export class PasswordModelService {
  constructor() {

  }

  isTherePWFile(): boolean {
    return true;
  }

  getPasswordModel(): PasswordModel {
    return null;
  }

  authorityPWFile(uid: string, pwd: string):Promise<undefined> {
    return new Promise((resolve, reject) => {
      resolve();
    })
  }

  savePWFile():Promise<undefined> {
    return new Promise((resolve, reject) => {
      resolve();
    })
  }
}
