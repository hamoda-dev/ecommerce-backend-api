const jwt = require('jsonwebtoken');

const path = require('path');

const fs = require('fs').promises;

const issueJwt = async (user, expirationTime = '1d') => {
  const privateKey = await fs.readFile(path.join(__dirname, '../id_rsa_priv.pem'), 'utf8');

  const payload = {
    sub: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    iat: Date.now(),
  };

  const signedToken = jwt.sign(payload, privateKey, { expiresIn: expirationTime, algorithm: 'RS256' });

  return signedToken;
};

module.exports = {
  issueJwt,
};
