const EventEmitter = require('events');

const customeventemitter = new EventEmitter();

customeventemitter.on('response',()=>{
    console.log('response event received');
})

customeventemitter.emit('response');