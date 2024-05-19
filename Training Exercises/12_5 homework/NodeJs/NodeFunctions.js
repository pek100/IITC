const fs = require('fs'); 
const path = require("path"); 

const newFilePath = path.join(__dirname, 'new-dir/file.txt');

if (fs.existsSync(path.join(__dirname, "new-dir"))){ console.log("exists")  
}else{
    console.log("doesnt exist")
    fs.mkdirSync(path.join(__dirname, "new-dir"))

    fs.writeFileSync(newFilePath, 'some text', 'utf8');
}

const txtInput = fs.readFileSync('input.txt','utf8');
console.log(txtInput);

const newInput = fs.readFileSync('new-input.txt','utf8');
fs.writeFileSync('new-input.txt', newInput + " " + txtInput);

newInput == txtInput ? console.log("appears once") : console.log("appears more than once")
fs.appendFileSync('new-input.txt', txtInput);

console.log(fs.readdirSync('./'));