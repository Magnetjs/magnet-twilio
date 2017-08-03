import { Module } from 'magnet-core/module'
import * as twilio from 'twilio'

export default class MagnetTwilio extends Module {
  init () {
    this.moduleName = 'twilio'
    this.defaultConfig = __dirname
  }

  async setup () {
    this.insert(twilio(this.config.accountSid, this.config.accountSid))
  }
}
