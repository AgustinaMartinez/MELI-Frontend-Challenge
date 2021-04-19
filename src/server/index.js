const express = require('express');
const config = require('../config/config');
const itemsRouter = require('../api/routes/items.routes');
const itemByIDRouter = require('../api/routes/itemByID.routes');

// Inizialization
const app = express();

// Middlewares
app.use(express.json());

// Settings
app.set('port', config.port);

// Routes
app.use('/api', itemsRouter); /*http://localhost:3001/api/items*/
app.use('/api', itemByIDRouter); /*http://localhost:3001/api/items/:id*/

app.use('/', (req, res) => {
  res.json('Welcome to Mercado Libre API REST!');
}); /*http://localhost:3001/*/

app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
