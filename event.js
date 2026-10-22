const EventEmitter = require("events");
const myEmitter = new EventEmitter();
//register an event listener
myEmitter.on("userLoggedIn",(username)=>{
    console.log(`user session started for: ${username}`);
});
myEmitter.emit("userLoggedIn","rahul kp");