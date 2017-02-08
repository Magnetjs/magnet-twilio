import convert from 'magnet-core/convert'
import twilioLibrary from 'twilio'
import defaultConfig from './config/twilio'

export default convert(
  twilioLibrary,
  {
    namespace: 'twilio',
    initializer: 'Twilio',
    params: ['config.accountSid', 'config.authToken']
  },
  defaultConfig
)
