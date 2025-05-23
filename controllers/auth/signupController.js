const User = require('../../models/user');

async function signupHandler(req, res){
    try{
        const { email, password } = req.body;
        
        // check for missing fields
        if (!email || !password) {
            return res.status(400).json({ message: 'Please fill in all fields' });
        }
        
        // check for existing user
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // create new user
        const newUser = new User({ email, password });
        await newUser.save();
        res.status(201).json({ success: true, message: 'User created successfully' });
    }
    catch (error){
        res.status(500).json({ message: false, error: error.message });
    }
}

module.exports = signupHandler;