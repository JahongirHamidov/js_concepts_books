// Writing to file on Node js
var fs = require("fs"); 
var stream; 
    stream = fs.createWriteStream("D://data.docx"); 
    stream.write("Tutorial on Node.js") 
    stream.write("Introduction") 
    stream.write("Events") 
    stream.write("Generators")
    stream.write("Data Connectivity") 
    stream.write("Using Jasmine")