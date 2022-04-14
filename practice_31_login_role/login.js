function login (req, res) {
  const {username, password} = req.body;
  if (username === 'admin' && password === 'admin123') {
    res.json({
      token: 'admin'
    });
  } else {
    res.status(401).json({
      message: 'Invalid credentials'
    });
  }
}

module.exports = {
    login
};