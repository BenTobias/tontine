// Filename: main.js

// Require.js allows us to configure shortcut alias
require.config({
  paths: {
    jquery: 'lib/jquery/jquery.min',
    underscore: 'lib/underscore/underscore.min',
    backbone: 'lib/backbone/backbone.min'
}

});

require([
    // Load our app module and pass it to our definition function
    'app',
    ], function(App){
    // The "app" dependency is passed in as "App"
    App.initialize();
});