const { comparePassword } = require('../../../utils/password');

const { issueJwt } = require('../../../utils/generateJwtToken');

const { User } = require('../../../models');

// login
const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });

  if (!user) {
    return res.status(422).json({ message: 'User not found' });
  }

  if ((await comparePassword(password, user.password)) === false) {
    return res.status(422).json({ message: 'Wrong password' });
  }

  const token = await issueJwt(user);

  return res.json({ token });
};

// get user profile
const profile = async (req, res) => {
  const user = await User.findOne({ where: { id: req.user.id } });

  return res.json({ user });
};

module.exports = {
  login,
  profile,
};
