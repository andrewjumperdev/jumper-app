const express = require('express');
const app = express();
const path = require('path');

// Settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
// middlewares 

// Routes 

app.use(require('./routes/index'));

// static files

// Escuchando el servidor | Listening the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});