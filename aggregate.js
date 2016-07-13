var fs = require("fs");
var data = fs.readFileSync('datafile.csv');
var map = require('./mapper.json');
var stringData=data.toString();
var arrayOne= stringData.split('\r\n');
var noOfRow=arrayOne.length;
var final_obj={};
var header=arrayOne[0].split(',');
var pop='Population (Millions) 2013';
var gdp='GDP Billions (USD) 2013';
var jArray=[];
var newi=header.indexOf('Country Name');
var cnt=header.indexOf('Population (Millions) 2013');
var cnt1=header.indexOf('GDP Billions (USD) 2013');
 for (i = 1; i < noOfRow-1; i++) {
   var line=arrayOne[i].split(',');
   if(line[newi] != "European Union") {
    if ( final_obj[map[line[newi]]]==undefined) {
      final_obj[map[line[newi]]]={};
    }
     if(final_obj[map[line[newi]]][header[cnt]]==undefined) {
       final_obj[map[line[newi]]][header[cnt]] = 0;
     }
     if(final_obj[map[line[newi]]][header[cnt1]]==undefined) {
       final_obj[map[line[newi]]][header[cnt1]] = 0;
     }
     final_obj[map[line[newi]]][header[cnt]]+=parseFloat(line[cnt]);
     final_obj[map[line[newi]]][header[cnt1]]+=parseFloat(line[cnt1]);
   }
 }
console.log(final_obj);
var file = 'aggregate.json';
var obj = JSON.stringify(final_obj);
fs.writeFileSync(file, obj);
