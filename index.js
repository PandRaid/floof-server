const express = require('express');
const path = require('path');

const app = express();

// An api endpoint that returns a short list of items
app.get('/avail', (req,res) => {
    console.log('Sent list of items');

    var dir = path.join(__dirname+'/available');
    var list = '{ "available" : [';
    var name = new RegExp("name[a-zA-Z]*");
    var birth = new RegExp("birth[a-zA-Z]*");
    var description = new RegExp("desc[a-zA-Z]*");
    var color = new RegExp("color[a-zA-Z]*");

    const fs = require('fs');

    fs.readdir(dir, function(err, filenames) {
      if (err) {
        console.log(err);
        return;
      }

      var count = 0;
      filenames.forEach(function(filename) {
      console.log("fn " + filename);
        fs.readFile(path.join(dir,filename), 'utf8' , (err, data) => {
          if (err) {
            console.error(err)
            return
          }
          list = list + '{ ';
          // split the contents by new line
          const lines = data.split(/\r?\n/);

          // print all lines
          lines.forEach((line) => {
            console.log("line " + line);
            const div = line.split(/:/);
            if (div.length > 2){
              console.error("Bad formatting on " + line);
            }
            else {
              if (name.test(div[0])){
                list += '{ "name" : ' + div[1];       
              }
              else if (birth.test(div[0])){
                list += '{ "birthdate" : ' + div[1];       
              }
              else if (description.test(div[0])){
                list += '{ "description" : ' + div[1];
              }
              else if (color.test(div[0])){
                list += '{ "color" : ' + div[1];
              }
              else {
                console.log("Unexpected formatter " + line);
              }

            }
          });

          list = list + '}';
        })

        if (count < (filenames.length - 1)){
          list = list + ']}';
        }
        else {
          count++;
          list = list + ', ';
        }
      });
      console.log("List " + list);
      res.json(list);
    });
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
    console.log('got wrong request');
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
