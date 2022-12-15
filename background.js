

import {PythonShell} from 'python-shell';  
import express from 'express';


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

});

