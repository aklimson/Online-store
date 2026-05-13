import User from '../models/schema/customerSchema.js';
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

export const registerUser = async (req, res,next) => {
    try {
        const { firstname, lastname, email, password, phoneNumber, address } = req.body;

        const emailExist = await User.findOne({email});
        if(emailExist) return res.status(400).json({msg: "Email already exists!"})

        const hashed = await bcrypt.hash(password, 10)
        const user = await User.create({ firstname, lastname, email, password: hashed, phoneNumber, address })
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
            expiresIn: "1m"
        });
        return res.json({ token });

    } catch (error) {
        next(error);
    }

}




export const loginUser = async (req, res,next) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

        const match = await bcrypt.compare(password, user.password)
        if (!match) return res.status(400).json({ msg: 'Invalid email or password' });

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
            expiresIn: "1m"
        });
        return res.json({ token });


    } catch (error) {
        next(error)
    }

}