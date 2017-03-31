Magnet wrapper for [Nodemailer](https://nodemailer.com/about/)

### Usage

[![Greenkeeper badge](https://badges.greenkeeper.io/Magnetjs/magnet-twilio.svg)](https://greenkeeper.io/)
Basic
```
import magnet from 'magnet-core';
import Config from 'magnet-config';
import Logger from 'magnet-bunyan';
import Twilio from 'magnet-twilio';

let app = await magnet([Config, Logger, Twilio]);

let response = await app.twilio.messages.create({
    body: 'Hello from Node',
    to: '+12345678901',  // Text this number
    from: '+12345678901' // From a valid Twilio number
}, function(err, message) {
    if(err) {
        console.error(err.message);
    }
})
```
