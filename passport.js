const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

passport.use(
	new GoogleStrategy(
		{
			clientID: '863011366622-qeltlmh33plgco56havum3haqc2sp8ud.apps.googleusercontent.com',
			clientSecret: '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',
			callbackURL: "/auth/google/callback",
			scope: ["profile", "email"],
		},
		function (accessToken, refreshToken, profile, callback) {
			callback(null, profile);
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});