import * as crypto from 'crypto-js';
import constants from './constants';

export class StorageUtil {

  static encKey = constants.ENCRYPTION_KEY
  static appKey = constants.APP_KEY

  static getItem(key) {
    let value = undefined
    if (key) {
      let appDataStr = localStorage.getItem(this.appKey)
      let appData = appDataStr ? JSON.parse(this.decrypt(appDataStr)) : {}
      value = appData[key]
    }
    return value
  }

  static setItem(key, value) {
    let result = false
    if (key && value) {
      let appDataStr = localStorage.getItem(this.appKey)
      let appData = appDataStr ? JSON.parse(this.decrypt(appDataStr)) : {}
      appData[key] = value
      value = JSON.stringify(appData)
      value = this.encrypt(value)
      localStorage.setItem(this.appKey, value)
      result = true
    }
    return result
  }

  static remove(key) {
    let appDataStr = localStorage.getItem(this.appKey)
    let appData = appDataStr ? JSON.parse(this.decrypt(appDataStr)) : {}
    delete appData[key]
    localStorage.setItem(this.appKey, this.encrypt(JSON.stringify(appData)))
  }

  static deleteStorageData() {
    localStorage.removeItem(this.appKey)
  }

  static deleteAll() {
    localStorage.clear()
  }

  static encrypt(value) {
    return crypto.AES.encrypt(value, this.encKey)
  }

  static decrypt(value) {
    return crypto.AES.decrypt(value, this.encKey).toString(crypto.enc.Utf8)
  }

}
