const EventEmitter = require('events');

const customeventemitter = new EventEmitter();

customeventemitter.on('response', (arg1, arg2) => {
    console.log('response event received ' + arg1 + arg2);
});
customeventemitter.on('response', () => {
    console.log('another response event handler');
});

customeventemitter.emit('response', 'hello ', 'world');