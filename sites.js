const express = require('express');
const exphbs = require('express-handlebars');
const path = require("path");
const app = express();
const port = 6600;

app.use(express.static(path.join(__dirname, "static")));


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html")
});

// app.post('/', function(req, res) {
//   res.sendFile(__dirname + "/index.html")
// });

app.listen(process.env.PORT || port, function() {
  console.log("listening to port 6600");
})
