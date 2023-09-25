// Imports
const User = require('../models/userModel.js')

// Trying to register
const register = async (req, res) => {
  const { uniqueID, password } = req.body
  try {
    const user = await User.register(uniqueID, password)
    res.status(200).json({ user })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
};

// Trying to Login by checking password
const login = async (req, res) => {
  const { uniqueID, password } = req.body
  try {
    const user = await User.login(uniqueID, password)
    res.status(200).json({ user })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
};

// Exporting Functions
module.exports = {
  login, register
}