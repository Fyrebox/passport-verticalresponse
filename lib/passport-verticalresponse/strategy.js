var OAuth2Strategy = require('passport-oauth').OAuth2Strategy
  , InternalOAuthError = require('passport-oauth').InternalOAuthError
  , util = require('util');

/**
 * `Strategy` constructor.
 *
 * Vertical Response uses the OAuth 2.0 protocol for authentication.
 *
 * Applications using this must supply a callback to verify the credentials which
 * accepts an `accessToken`, `refreshToken`, and a `profile`. After verifying the
 * credentials it should call `done` with the user object and any error that may
 * have occured as the first parameter.
 *
 * Options:
 *   - `clientID`	your Vertical Response App Key
 *   - `clientSecret`	your Vertical Response's App Secret
 *   - `callbackURL`	URL to which Vertical Response will redirect the user after granting authorization
 *
 * Examples:
 *
 *     passport.use(new VerticalResponseStrategy({
 *         clientID: 'VERTICALRESPONSE_APP_ID',
 *         clientSecret: 'VERTICALRESPONSE_SECRET',
 *         callbackURL: 'https://www.example.net/auth/verticalresponse/callback'
 *       },
 *       function(accessToken, refreshToken, profile, done) {
 *         User.findOrCreate(..., function (err, user) {
 *           done(err, user);
 *         });
 *       }
 *     ));
 *
 * @param {Object} options
 * @param {Function} verify
 * @api public
 */
function Strategy(options, verify) {
  options = options || {};
  options.authorizationURL = options.authorizationURL || 'https://vrapi.verticalresponse.com/api/v1/oauth/authorize';
  options.tokenURL = options.tokenURL || 'https://vrapi.verticalresponse.com/api/v1/oauth/access_token';

  OAuth2Strategy.call(this, options, verify);
  this.name = 'verticalresponse';
  this._oauth2._useAuthorizationHeaderForGET = true;
  this._oauth2._skipUserProfile = true;
}

util.inherits(Strategy, OAuth2Strategy);

module.exports = Strategy;
