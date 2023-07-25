const fs = require('fs');

const path = require('path');

const JwtStrategy = require('passport-jwt').Strategy;

const { ExtractJwt } = require('passport-jwt');

const { User } = require('../models');

const pathToKey = path.join(__dirname, '..', 'id_rsa_pub.pem');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: fs.readFileSync(pathToKey, 'utf8'),
  algorithms: ['RS256'],
};

const strategy = new JwtStrategy(options, async (payload, done) => {
  const user = await User.findOne({ where: { id: payload.sub } });

  if (!user) {
    return done(null, false);
  }

  return done(null, user);
});

module.exports = (passport) => {
  passport.use(strategy);
};
