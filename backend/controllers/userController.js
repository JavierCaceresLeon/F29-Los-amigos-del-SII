// controllers/userController.js
const User = require('../models/User');

exports.login = async (req, res) => {
    const { email, password } = req.body;
    console.log("data: ", email + "password:" + password);
    try {
        const user = await User.findOne({email});
        console.log(user);
        if (email === user.email && password === user.password) {
            res.send(`user: ${email} logged in successfully`);
        } else {
            res.status(401).send('Authentication failed');
        }
    } catch (err) {
        res.status(500).send('Server error');
    }
};
