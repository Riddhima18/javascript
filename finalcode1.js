var fs = require("fs");
var cnt,a,b,cnt1;
var i=0,j=0;
var data = fs.readFileSync('file1.csv');
var stringData=data.toString();
var arrayOne= stringData.split('\r\n');
var noOfRow=arrayOne.length;
var header=arrayOne[0].split(',');
var param='Country Name';
var p='data.json';
var p1='data1.json';
var p2='data2.json';
var param1='Population (Millions) - 2013';
var param2='GDP Billions (US$) - 2013';
var param3='Purchasing Power in Billions ( Current International Dollar) - 2013';
function descend(country,data,p)
{
 var jArray=[];
 var final_obj={};
 var cnt=header.indexOf(country);
 var cnt1=header.indexOf(data);
 for (i = 1; i < noOfRow-1; i++)
 {
   var myNewLine=arrayOne[i].split(',');
   if(myNewLine[cnt] != "European Union")
   {

   final_obj[header[cnt]]=myNewLine[cnt];
   final_obj[header[cnt1]]=myNewLine[cnt1];
   jArray.push(final_obj);
   jArray.sort(function(a,b)
   {
   return b[data]-a[data];
   })
  final_obj={};
}
 }
 console.log(jArray);
 var file = p;
 var obj = JSON.stringify(jArray);
 fs.writeFileSync(file, obj);
}
descend(param,param1,p);
descend(param,param2,p1);
descend(param,param3,p2);
