var express= require('express');
var app = express();
app.use('/static', express.static(__dirname + '/public'));
app.listen(2000, function(){
  console.log("Listening to port no 2000");
});