var passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
      clientID: "1672506192979345",
      clientSecret: "e6b5629052d27958872d4f069253d60e",
      callbackURL: "http://localhost:1337/auth/facebook/callback"
    }, verifyHandler));
    
var verifyHandler = function(token, tokenSecret, profile, done) {
  process.nextTick(function() {

    SocialUser.findOne({uid: profile.id}, function(err, socialuser) {
      if (socialuser) {
        return done(null, socialuser);
      } else {

        var data = {
          provider: profile.provider,
          uid: profile.id,
          name: profile.displayName
        };

        if (profile.emails && profile.emails[0] && profile.emails[0].value) {
          data.email = profile.emails[0].value;
        }
        if (profile.name && profile.name.givenName) {
          data.firstname = profile.name.givenName;
        }
        if (profile.name && profile.name.familyName) {
          data.lastname = profile.name.familyName;
        }

        SocialUser.create(data, function(err, socialuser) {
          return done(err, socialuser);
        });
      }
    });
  });
};

passport.serializesocialuser(function(socialuser, done) {
  done(null, socialuser.uid);
});

passport.deserializesocialuser(function(uid, done) {
  socialuser.findOne({uid: uid}, function(err, socialuser) {
    done(err, socialuser);
  });
});

