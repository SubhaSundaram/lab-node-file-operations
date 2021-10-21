require('./data')
const os = require('os')
const fs=require('fs')
const crypto=require('crypto')
var userdata= data("Prograd",2020,"BE")
console.log(userdata)
let userinf=os.userInfo().username;
const password = crypto.createHmac('sha256', 'password').update('Prograd').digest('hex');

fs.writeFile('message.txt',"ProGrad Details\n"+userdata,function(err){
    if(err)
    throw err
    })

fs.appendFile('message.txt',"Username ->"+userinf+"\n",function(err){
    if(err)
    throw err
})
fs.appendFile('message.txt',"Password ->"+password+"\n",function(err){
    if(err)
    throw err
})