const express = require('express');
// const path = require('path');
// const favicon = require('serve-favicon');
// const logger = require('morgan');
// const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// const connect = require('connect')
// const methodOverride = require('method-override')

const routes = require('./routes/index');
const books = require('./routes/books');

const app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(methodOverride('_method'));
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use("/static", express.static('public'));

app.use('/', routes);
app.use('/books', books);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.render('page-not-found');
});

// // error handlers
// // catch 500 and forward to error handler
// app.use((err, req, res, next) => {
//   res.locals.error = err;
//   let status = err.status;
//   if (!status) {
//     status = 500;
//     res.status(status);
//   }
//   res.render('error');
// });
// showing the error
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.locals.message = err.message;
    res.locals.error = err;
    res.render('error');
  });
} else {
  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
  });
}



// app.listen(3000, () => {
//     console.log('The application is running on localhost:3000!');
// });

module.exports = app;


// //Setting up to use the db folder we created.
// const db = require('./db');
// const { Book } = db.models;

// //Setting up express
// const express = require('express');
// const app = express();

// //Using third party middleware
// const bodyParser = require('body-parser');

// //Setting up middleware
// app.use(bodyParser.urlencoded({ extended: false}));

// //Setting up pug
// //Update code in app to use Pug
// app.set('view engine', 'pug');

// //Using a static route and the express.static method to serve the static files located in the public folder.
// app.use('/static', express.static('public'));

// //Adding routes and sending strings to the client.
// //Merges the data with the templates to surf dynamic pages.
// //Home route should redirect to the /books route.
// app.get('/', (req, res, next) => {
//     res.redirect('/books')
// });

// //Shows the full list of books.
// app.get('/books', async (req, res, next) => {
//     let books = await Book.findAll({});
//     res.render('index', {books});
// });


// //Shows the create new book form.
// app.get('/books/new', async (req, res, next) => {
//     res.render('new-book', { book: Book.build(), title: 'New Book' });
// });

// //Posts a new book to the database.
// app.post('/books/new', async (req, res, next) => {
//     res.render('/new');
// });

// //Shows book detail form.
// app.get('/books/:id', async (req, res, next) => {
//     const bookById = await Book.findOne();
//     res.render('update-book');
// });

// //Updates book info in the database.
// app.post('/books/:id', async (req, res, next) => {
//     res.render('books/:id');
// });

// //Deletes a book. 
// app.post('/books/:id/delete', async (req, res, next) => {
//     res.render('books/:id');
// });



// //Include Sequelize in your program. 
// const Sequelize = require('sequelize');

// //Pass the Sequelize() constructor an object with the parameters dialect and storage.
// //dialect: specific version of SQL you're using.
// //storage: to specify the file path or the storage engine for SQLite.
// const sequelize = new Sequelize({
//     dialect: 'sqlite',
//     storage: 'library.db'
//   });

// //Define the async immediately invoked function expression (IIFE) function.
// (async () => {
// // Inside the try block, log a "success" message to the console. 
//   try {
// // to test that the connection is OK and you can connect to the database.
//     await sequelize.authenticate();
//     console.log('Connection to the database successful!');
// // In the catch block, use console.error() to print an 'error' message displaying the error.
//   } catch (error) {
//     console.error('Error connecting to the database: ', error);
//   }
// })();

// //Book model
// //extending from Sequelize.Model, which is part of Sequelize's API for model definition.
// class Book extends Sequelize.Model {}
// //Call the static class init() method on the model name to initialize and configure the model.
// //This defines a new table in the database. Sequelize will look for information in this table.
// //model name is singular and the table name is plural. 
// Book.init({
// //title is an attribute and also a column of the table.
// //second argument is the data type.
//   title: Sequelize.STRING,
//   author: Sequelize.STRING,
//   genre: Sequelize.STRING,
//   year: Sequelize.INTEGER,
// //initializes a model representing a 'Book' table in the database, with one column: 'title'.
// }, { sequelize });