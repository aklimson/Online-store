import User from '../models/schema/customerSchema.js';
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

export const registerUser = async (req, res, next) => {
    try {
        const { firstname, lastname, email, password, phoneNumber, address } = req.body;

        const emailExist = await User.findOne({ email });
        if (emailExist) return res.status(400).json({ msg: "User already exists!" })

        const hashed = await bcrypt.hash(password, 10)

        const user = await User.create({ firstname, lastname, email, password: hashed, phoneNumber, address })
        res.status(201).json({ message: "User registered successfully" });

    } catch (error) {
        next(error);
    }

}

export const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ msg: 'Invalid email or password' });

        const match = await bcrypt.compare(password, user.password)
        if (!match) return res.status(400).json({ msg: 'Invalid email or password' });

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
            expiresIn: "1m"
        });
        return res.status(200).json({
            token,
            user: {
                id: user._id,
                firstname: user.firstname,
                email: user.email,
                role: user.role
            }
        });


    } catch (error) {
        next(error)
    }

}