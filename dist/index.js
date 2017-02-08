'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _convert = require('magnet-core/convert');

var _convert2 = _interopRequireDefault(_convert);

var _twilio = require('twilio');

var _twilio2 = _interopRequireDefault(_twilio);

var _twilio3 = require('./config/twilio');

var _twilio4 = _interopRequireDefault(_twilio3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _convert2.default)(_twilio2.default, {
  namespace: 'twilio',
  initializer: 'Twilio',
  params: ['config.accountSid', 'config.authToken']
}, _twilio4.default);