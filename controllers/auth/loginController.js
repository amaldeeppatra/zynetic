const User = require('../../models/user');

async function loginHandler(req, res){
    try{
        const { email, password } = req.body;
        
        const token = await User.matchPasswordAndGenerateToken(email, password);
        const user = await User.findOne({ email});
        
        if(!user){
            return res.status(400).json({ message: 'User not found' });
        }

        res.status(200).json({ success: true, token });
    }
    catch (error){
        res.status(500).json({ success: false, message: error.message});
    }
}

module.exports = loginHandler;