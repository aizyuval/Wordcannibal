

import {PythonShell} from 'python-shell';  //lets see if this bring errors!!!
import express from 'express';

//const express = require('express');
//const PythonShell = require('python-shell');

const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening in ${port}`));




app.use(express.static('public'));
app.use(express.json({limit: '1mb'}))

app.post('/api', (request, response)=>{

console.log(request.body);

const optionss = {

    mode: 'text',
    scriptPath: 'D:/prog/html/extvone', 
    args: request.body.wordlist 

}
PythonShell.run('hoardy.py', optionss, function(err, results){


if (err) throw err;
console.log('this results: %j', results);
response.json({

    thedata: results
  
  
  });
});


// end of pyshell section



});





/*
for (x in data.wordl){
data.wordl[x] = `its ${data.wordl[x]}`;
}


import {PythonShell} from 'python-shell';
chrome.action.onClicked.addListener(buttonClicked);

function buttonClicked(tab){

var msg = { 
      txt: "hellfuckthisworks"
    };

    chrome.tabs.sendMessage(tab.id,msg);


  }
*/



/*
,
    "browser_action":{
        "default_icon": "ext.png"
    }
*/