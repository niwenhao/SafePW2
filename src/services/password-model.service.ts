import { Injectable } from '@angular/core'
import { PasswordModel } from '../common-types'

/**
 * To access a crypto-safe password file.
 *
 * can encoding or decoding password map with same crypto method link AES.
 *
 * @description
 *    Password file format:
 *
 *
 * <h1/>
 *
 */
@Injectable()
export class PasswordModelService {
  /**
   * Constructor.
   * Crypto service should be injected in the future.
   */
  constructor() {

  }

  /**
   * judge whether the password file exists.
   * @return true: exists false: not exists.
   */
  isTherePWFile(): boolean {
    return true;
  }

  /**
   * get password data after authorized the file.
   * @return PasswordModel
   */
  getPasswordModel(): PasswordModel {
    return null;
  }

  /**
   * Authority the password file and decoding it to memory.
   */
  authorityPWFile(uid: string, pwd: string):Promise<undefined> {
    return new Promise((resolve, reject) => {
      resolve();
    })
  }

  /**
   * encode password data and save it as file.
   */
  savePWFile():Promise<undefined> {
    return new Promise((resolve, reject) => {
      resolve();
    })
  }
}
