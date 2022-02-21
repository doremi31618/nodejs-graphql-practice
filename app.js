var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//=========================GraphQL Syntax start======================================
//import require package
const {graphqlHTTP } = require('express-graphql'); 
const {makeExecutableSchema} = require('@graphql-tools/schema');
const {loadFilesSync} = require('@graphql-tools/load-files');

const typesArray = loadFilesSync(path.join(__dirname, './models/**/*.graphql'));
const resolversArray = loadFilesSync(path.join(__dirname, './models/**/*.resolver.js'));
const schema = makeExecutableSchema({
  typeDefs: typesArray,
  resolvers: resolversArray,
});

const root = {
  products: require('./models/products/products.model'),
  orders: require('./models/orders/orders.model')
};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

//=========================GraphQL Syntax end======================================


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(5000, ()=>{
  console.log('Running GraphQL Server')
})

module.exports = app;
