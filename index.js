const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
app.use('/static', express.static(path.join(__dirname, 'pictures')));
app.use(express.static(path.join(__dirname, 'client/build')));
console.log(path.join(__dirname, 'pictures'));

function parse_list(ext){
  var list = "{ ";
  const fs = require('fs');

  var count_dirs = 0;
  var dirs = [ext];

  if (ext == "available"){
    dirs.push("expected");
    dirs.push("past");
  }

  dirs.forEach((dir_short) => {
    var dir = path.join(__dirname +'/' + dir_short);
    list += '"' + dir_short + '" : [';
    var filenames = fs.readdirSync(dir, 'utf8');
    var count = 0;
    var fn_len = filenames.length;

    filenames.forEach(function(filename){
      var extension = new RegExp("[a-zA-z0-9]*\.txt");
      if (!extension.test(filename)){
        fn_len = fn_len - 1;
      }
    })

    filenames.forEach(function(filename){
      var extension = new RegExp("[a-zA-z0-9]*\.txt");
      if (extension.test(filename)){
        var data = fs.readFileSync(path.join(dir,filename), 'utf8');

        list = list + '{ ';
        // split the contents by new line
        const lines = data.split(/\r?\n/);

        var count2 = 0;
        // print all lines
        lines.forEach((line) => {
          const div = line.split(/:/);
          if (div.length > 2){
            console.error("Bad formatting on " + line);
          }
          else {
            if (dir_short == "expected"){
              var dad = new RegExp("dad[a-zA-Z]*");
              var dad_dna = new RegExp("dnad[a-zA-Z]*");
              var mom = new RegExp("mom[a-zA-Z]*");
              var mom_dna = new RegExp("dnam[a-zA-Z]*");
              var exp = new RegExp("exp[a-zA-Z]*");
              var description = new RegExp("desc[a-zA-Z]*");
              var pics = new RegExp("pic[a-zA-Z]*");

              if (dad.test(div[0])){
                list += '"dad" : "' + div[1].trim() + '"';       
              }
              else if (dad_dna.test(div[0])){
                list += '"dad_dna" : "' + div[1].trim() + '"';       
              }
              else if (mom.test(div[0])){
                list += '"mom" : "' + div[1].trim() + '"';
              }
              else if (mom_dna.test(div[0])){
                list += '"mom_dna" : "' + div[1].trim() + '"';
              } 
              else if (exp.test(div[0])){
                list += '"exp" : "' + div[1].trim() + '"';
              } 
              else if (pics.test(div[0])){
                list += '"pics" : "' + div[1].trim() + '"';
              }
              else if (description.test(div[0])){
                list += '"description" : "' + div[1].trim() + '"';
              }
              else {
                console.log("Unexpected formatter " + line);
              }
            }
            else {
              var name = new RegExp("name[a-zA-Z]*");
              var birth = new RegExp("birth[a-zA-Z]*");
              var description = new RegExp("desc[a-zA-Z]*");
              var color = new RegExp("color[a-zA-Z]*");
              var pics = new RegExp("pic[a-zA-Z]*");

              if (name.test(div[0])){
                list += '"name" : "' + div[1].trim() + '"';       
              }
              else if (birth.test(div[0])){
                list += '"birthdate" : "' + div[1].trim() + '"';       
              }
              else if (description.test(div[0])){
                list += '"description" : "' + div[1].trim() + '"';
              }
              else if (color.test(div[0])){
                list += '"color" : "' + div[1].trim() + '"';
              } 
              else if (pics.test(div[0])){
                list += '"pics" : "' + div[1].trim() + '"';
              }
              else {
                console.log("Unexpected formatter " + line);
              }
           }

          }
          if (count2 < (lines.length - 2)){
            count2++;
            list += ",";
          }
        });
        list += '}';

        if (count != (fn_len - 1)){
          count++;
          list = list + ', ';
        }
      }

    })

    if (count_dirs < (dirs.length-1)){
      count_dirs++;
      list += '],';
    }
    else {
      count_dirs++;
      list += ']}';
    }
  })

  return list;
}



// An api endpoint that returns a short list of items
app.get('/queen', (req,res) => {

    var queen = parse_list("queen");
    var val = JSON.parse(queen);
    console.log(val);

    res.json(val);
});

// An api endpoint that returns a short list of items
app.get('/stud', (req,res) => {

    var stud = parse_list("stud");
    var val = JSON.parse(stud);
    console.log(val);

    res.json(val);
});

// An api endpoint that returns a short list of items
app.get('/past', (req,res) => {

    var past = parse_list("past");
    var val = JSON.parse(past);
    console.log(val);

    res.json(val);
});

// An api endpoint that returns a short list of items
app.get('/expected', (req,res) => {

    var expected = parse_list("expected");
    var val = JSON.parse(expected);
    console.log(val);

    res.json(val);
});

// An api endpoint that returns a short list of items
app.get('/avail', (req,res) => {


    var avail = parse_list("available");
    console.log(avail);
    var val = JSON.parse(avail);
    console.log(val);

    res.json(val);
});


// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
