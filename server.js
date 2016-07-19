/* eslint-disable */

var path = require("path");
var express = require("express");
var webpack = require("webpack");
var config = require("./webpack.config");

var app = express();
var compiler = webpack(config);

const server = require('http').Server(app);
var port = process.env.PORT || 3000;


// ****************** READ THIS, TEAM IMPERIO!! *************************
// Uncomment or edit these lines to refer to the desired library version:
// **********************************************************************
// Path to npm module:
// const imperio = require('imperio')(server);
// Path to local (in-development) version of the repository
const imperio = require('./../imperio/index.js')(server);

// ****************** READ THIS, TEAM IMPERIO!! *************************
// You need to adjust the path to the desired front-end build, like above
//  Should lead to the ROOT directory of the imperio library (not /dist)
// **********************************************************************
// Path to npm module:
// app.use(express.static(path.join(`${__dirname}/../node_modules/imperio`)));
// Path to local (in-development) version of the repository
// Searches this library first for all static files and if it is not found there
// then it searches the next satic file....and  on and on and on
app.use(express.static(path.join(`${__dirname}/../imperio`)));


/* ----------------------------------
 * -----   Global Middleware   ------
 * ---------------------------------- */

app.use(express.static(path.join(`${__dirname}/client`)));
app.set('view engine', 'ejs');
// app.use(imperio.init());

app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

// app.get("*",imperio.init(), function(req, res) {
//   res.sendFile(path.join(__dirname, "index.html"));
// });
app.get('/favicon.ico', (req, res) => {
  console.log('favicon workaround handled!');
  res.send();
});

app.get('/', imperio.init(),
   (req, res) => {
     console.log("we're hitting the server");
     if (req.useragent && req.useragent.isDesktop) {
       res.sendFile(path.join(__dirname, "index.html"));
       // res.render(`../client/browser.html`);
     } else if (req.useragent && req.useragent.isMobile) {
       console.log("hitting mobile now");
       // TODO if token is on request, sent to tap in appropriate room
       res.render(path.join(__dirname, "client/mobileSecurityPage"));
     }
   }
 );

 app.post('/', imperio.init(),
  (req, res) => {
    console.log('received post request!');
    if (req.useragent && req.useragent.isMobile) {
      // TODO Validate nonce match, if it doesn't, serve rootmobile
      console.log(req.imperio);
      if (req.imperio.connected) {
        res.render(`${__dirname}/client/mobileSwipePage`, { error: null });
      } else {
        res.render(`${__dirname}/client/mobileSecurityPage`, { error: null });
      }
    } else {
      res.status(404)
         .render(`${__dirname}/client/mobileSecurityPage`, { error: 'NO POST' });
    }
  }
);

server.listen(port, "localhost", function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Listening at http://localhost:" + port);
});
