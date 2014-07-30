var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user');
var Item = require('../models/items');
var httpreq = require('httpreq');
var http = require('http');



router.get('/', function (req, res) {
  var itemTester = {
    title: "String",
    titleKey: "String",
    description: "String",
    cost: 0,
    startTime: 7/30/2014,
    endTime: 8/7/2015,
    userId: "String",
    participants: ["bob", "jane"],
    keywords: ["skydiving"],
    photo_url: "String"
};
console.log(itemTester);

itemTester.save(function(err){
  if (err) console.log(err);
});

console.log("Winning");
console.log(Item.search("blah"));


  console.log("before");
  var currentUser = null;
  var authentication = false;
  if (req.session.currentUser) {
    currentUser = req.session.currentUser;
    authentication = true;
    console.log("loggin here");
}
res.render('index', { tontineUser : currentUser, authenticated: authentication });

});

router.get('/register', function(req, res) {

  res.render('register', {info:"stuff"});

});




router.post('/postMessage', function(req, res) {
  var currentUser = req.session.currentUser;
  var postInformation = {
    "activity":{
      "actor":{"name": currentUser.username,
      "email": currentUser.email},
      "action":"create",
      "object": {
        "url":"blahblah",
        "title":"Finding card Item"
    },
    "message":"Hey let's do this",
}
};
var resultObject;
var postString = JSON.stringify(postInformation);
var headers = {
    'Content-Type': 'application/json',
    'Authorization': "Bearer " + currentUser.access_token
};
var options = {
    host: 'www.yammer.com',
    path: '/api/v1/activity',
    method: 'POST',
    headers: headers
};

var req = http.request(options, function(res) {
    res.setEncoding('utf-8');
    var responseString = '';

    res.on('data', function(data) {
      console.log("data coming in");
      responseString += data;
  });

    res.on('end', function(){
      console.log("done");
      console.log(responseString);
  });
});


req.on('error', function(e) {
    console.log(e);
});

req.end();
res.redirect('/');


});




router.post('/')
router.post('/register', function(req, res) {
  console.log(req.body.username);
  console.log(req.body.password);
  if((req.body.password).length < 4){
    return res.render("register", {info: "Get a longer password"});
}
User.register(new User({ username : req.body.username }), req.body.password, function(err, account) {
    if (err) {
      return res.render("register", {info: "Sorry. That username already exists. Try again."});
  }

  passport.authenticate('local-signup')(req, res, function () {
      res.redirect('/');
  });
});
});

router.post('/additem', function(req, res) {
  var newItem = new Item();
  for (field in newItem) {
    newItem.field = req.body[field];

}
newItem.save(function(err) {
    if (err){
      console.log(err);
      throw err;
  }
})
});


router.post('/search', function(req, res) {
  var keyword = req.body.keyword;
  Item.search(keyword);
});

router.get('/yammer', function(req, res) {
  var userFields;
  var currentUser;
  var yammerCode = req.query.code;
  var getYammerFieldsAddress = "http://www.yammer.com/oauth2/access_token.json?client_id=OfONHDZ938SqEUudZF2dw&client_secret=0e5VaHJOr2yqMXlzLq0SbAkA4PxiGKT7TOV4jHDgL4&code=";
  getYammerFieldsAddress += yammerCode;
  httpreq.get(getYammerFieldsAddress, function(err, response) {
    if (err) return console.log(err);
    var yammerUserInfo = JSON.parse(response.body);
    var yammerId = yammerUserInfo.user.id;
    var mugshot = yammerUserInfo.user.mugshot_url;
    var yammerAccessToken = yammerUserInfo.access_token.token;
    var yammerFullName = yammerUserInfo.user.full_name;
    var yammerEmail = yammerUserInfo.user.contact.email_addresses[0].address;

    User.findOne({'id' : yammerId}, function(err, user) {
      if (err)
        console.log(err);
    if (user) {
        user.access_token = yammerAccessToken;
        user.photo = mugshot;
        console.log("User has been created");
        currentUser = user;
    }
    else {
        var newUser = new User();
        newUser.id = yammerId;
        newUser.access_token = yammerAccessToken;
        newUser.username = yammerFullName;
        newUser.photo = mugshot;
        newUser.email = yammerEmail;
        console.log(newUser);
        newUser.save(function(err) {
          if (err) 
            throw err;
        currentUser = user;
    });
    }
    req.session.currentUser = currentUser;
    req.session.authenticated = true;
    res.render('index', {tontineUser : currentUser, authenticated: req.session.authenticated });
});


});


});

router.get('newAddress', function(req, res) {
  res.render('yammer');
});




router.get('/login', function(req, res) {
  res.render('login', {});
});

router.post('/login', passport.authenticate('yammer', {
  successRedirect : '/profile',
  failureRedirect : '/login',
  failureFlash : true
}));

router.get('/profile', function(req, res) {
  isYammerLoggedIn();
  res.render('profile.ejs', {
      user : req.user // get the user out of session and pass to template
  });
});







router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

router.get('/ping', function(req, res){
  res.send("pong!", 200);
});

function isLoggedIn(req, res, next) {

  if (req.isAuthenticated())
    return next();
res.redirect('/login');
};

function isYammerLoggedIn() {
  return yam.getLoginStatus(
    function(response) {
      if (response.authResponse) {
        console.log("logged in");
        console.dir(response); //print user information to the console
    }
    else { //authResponse = false if the user is not logged in, or is logged in but hasn't authorized your app yet
      console.log("logged out");
}
}
)();
}




module.exports = router;
