const express = require('express');
const app = express();

//certbot expects files in /var/ww/html
//to be served statically
//so that it can find hallenge fields
//in /var/www/html/.well-known during
//certification renewl


app.use(express.static('/var/www/html'));

app.listen(5000, function () {
  console.log('Webserver listening on port 5000');
});
