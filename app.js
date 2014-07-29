var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var passport = require('passport');
var PassportLocalStrategy = require('passport-local').Strategy;
var YammerStrategy = require('passport-yammer').Strategy;

var YAMMER_CONSUMER_KEY = "OfONHDZ938SqEUudZF2dw";
var YAMMER_CONSUMER_SECRET = "0e5VaHJOr2yqMXlzLq0SbAkA4PxiGKT7TOV4jHDgL4";


var routes = require('./routes/index');
var users = require('./routes/users');

var User = require('./models/user.js');





var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('connect-flash')());

app.use(session({secret: 'my secret', cookie: {maxAge:24*60*60*1000}}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);
app.use('/users', users);





passport.use(User.createStrategy());
passport.serializeUser(function(user, done) {
    done(null, user.id);
});
passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

<<<<<<< HEAD:tontine/app.js
passport.use(new YammerStrategy({clientID: YAMMER_CONSUMER_KEY, clientSecret: YAMMER_CONSUMER_SECRET, callbackURL: "/"},
 function(accessToken, refreshToken, profile, done){
=======
passport.use(new YammerStrategy({clientID: YAMMER_CONSUMER_KEY, clientSecret:
YAMMER_CONSUMER_SECRET, callbackURL: "/"}, function(accessToken, refreshToken, profile, done){
>>>>>>> e9b43ec28a1dd15474267a1ddb8c6a1c4454de10:app.js
    process.nextTick(function(){
        console.log("strategy");
        console.log(profile);
        console.log(accessToken);
        console.log(refreshToken);
        User.findOne({ 'yammer.id' : profile:id }, function(err, user) {
            if (err)
                return done(err);

            if (user) {
                return done(null, user);
            }
            else {
                var newUser = new User();`

                newUser.yammer.id = profile.id;
                newUser.yammer.token = token;
                newUser.facebook.name = profile.name;
                newUser.save(function(err) {
                    if (err)
                        throw err;
                })
                return done(null, newUser);
            }
        })

        done(null, profile);
    });
}
));

mongoose.connect('mongodb://localhost/tontine');

var tester = User.find({username : "bob"}, function(err, p){
    if (err) console.log("didn't find bob");
    var lolz = p.username;
    console.log(p);
    console.log(lolz);
    return p;


});


/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});

module.exports = app;
