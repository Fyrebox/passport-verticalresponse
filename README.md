# Passport-VerticalResponse

[Passport](http://passportjs.org/) strategy for authenticating with [VerticalResponse](http://www.verticalresponse.com/)
using the OAuth 2.0 API.

This module lets you authenticate using VerticalResponse in your Node.js applications.
By plugging into Passport, VerticalResponse authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Usage

#### Configure Strategy

The Vertical Response authentication strategy authenticates users using a Vertical Response account and OAuth 2.0 tokens.  The strategy requires a `verify` callback, which
accepts these credentials and calls `done` providing a user, as well as
`options` specifying a app ID, app secret, and callback URL.

    passport.use(new VerticalResponseStrategy({
        clientID: VERTICALRESPONSE_KEY,
        clientSecret: VERTICALRESPONSE_SECRET,
        callbackURL: "http://localhost:3000/auth/verticalresponse/callback"
      }, function (accessToken, refreshToken, profile, done) {
        User.findOrCreate({ verticalresponseif: profile.id }, function(err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'verticalresponse'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/verticalresponse', passport.authenticate('verticalresponse'));

    app.get('/auth/verticalresponse/callback',
      passport.authenticate('verticalresponse', { failureRedirect: '/login' }),
      function(req, res) {
        // Successul authentication, redirect home.
        res.redirect('/');
      });

## Credits

Created by [Cyril Gaillard](http://github.com/fyrebox)

Code based on passport-campaignmonitor by [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)
