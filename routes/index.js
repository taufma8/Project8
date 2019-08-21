const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect("/books")
});

module.exports = router;
// const Sequelize = require('sequelize');

// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: 'books.db',
//   //Allows you to see exactly what Sequelize is doing with the database.
//   logging: false
// });

// const db = {
//   sequelize,
//   Sequelize,
//   models: {},
// };

// //The file exports the db object, which holds the Sequelize and database configurations, as well as all the models.
// db.models.Book = require('./models/book.js')(sequelize);

// (async () => {
//   //sync all models and create tables that do not exist in the database. 
//   //accepts an object with a force parameter that lets you control the database synchronization.
//   //force: true--drop a table that exists, each time you start your app, and recreate it from the model definition.
//   await db.sequelize.sync({ force: true });

//   try {

//   } catch (error) {
//     // console.error('Error connecting to the database: ', error);
//     //If the error is SequelizeValidationError, map over the error item(s) and return an array holding any error messages.
//         if (error.name === 'SequelizeValidationError') {
//             const errors = error.errors.map(err => err.message);
//             console.error('Validation errors: ', errors);
//     //In the else block, use a throw statement to rethrow other types of errors caught by catch.
//         } else {
//             throw error;
//         } 
//     }
// })();

// module.exports = db;