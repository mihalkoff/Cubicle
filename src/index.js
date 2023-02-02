const express = require('express');

const routes = require('./routes');
const config = require('./config');
const setupViewEngine = require('./config/viewEngine');

//Database with mongoose
const initDatabase = require('./config/databaseInit');

const app = express();
setupViewEngine(app);

app.use(express.static('src/public'));

//middleware
app.use(express.urlencoded({extended: false}));

app.use(routes);

initDatabase()
    .then(() => app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}...`)))
    .catch((err) => console.error(err));