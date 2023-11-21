// const EventEmitter = require('events');// class creation
// const celebrity = new EventEmitter();// class instance
// const str = new EventEmitter();
// //observer
// celebrity.on('photoshoot',(data)=>{
//     if(data==='success') //condition for the event
//     console.log('story created');
// });
// celebrity.on('movie selected',()=>{
//     console.log('whishing celebrity');
// });
// str.on('shop opening',()=>{
//     console.log('welcoming str');
// });
// str.on('next movie shoot',()=>{
//     console.log('pooja');
// });
// celebrity.emit('photoshoot','failure'); // event with parameter or data
// str.emit('shop opening');


//http request:
const http = require('http');
const a=http.request('http://jsonplaceholder.typicode.com/users',(response)=>{
    response.setEncoding('utf8');
    response.on('data',(data)=>{
        console.log(data)
    });
});
a.end();