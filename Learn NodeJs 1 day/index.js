// Writing to file on Node js
var fs = require("fs"); 
var stream; 
    stream = fs.createWriteStream("D://data.txt"); 
    stream.write("Tutorial on Node.js") 
    stream.write("Introduction") 
    stream.write("Events") 
    stream.write("Generators")
    stream.write("Data Connectivity") 
    stream.write("Using Jasmine")

// NodeJs Events

var events = require('events'); 
var eventEmitter = new events.EventEmitter(); 
    eventEmitter.on('data_received', function() { 
        console.log('data received succesfully.'); 
    }); 
    eventEmitter.emit('data_received');
    