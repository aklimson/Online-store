import Customer from '../models/schema/customerSchema.js';
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

export const registerCustomer = async (req, res, next) => {
    try {
        const { firstname, lastname, email, password, phoneNumber, address } = req.body;

        const emailExist = await Customer.findOne({ email });
        if (emailExist) return res.status(400).json({ msg: "Customer already exists!" })

        const hashed = await bcrypt.hash(password, 10)

        const customer = await Customer.create({ firstname, lastname, email, password: hashed, phoneNumber, address })
        res.status(201).json({ message: "Customer registered successfully" });

    } catch (error) {
        next(error);
    }
}

export const loginCustomer = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const customer = await Customer.findOne({ email });
        if (!customer) return res.status(400).json({ msg: 'Invalid email or password' });

        const match = await bcrypt.compare(password, customer.password)
        if (!match) return res.status(400).json({ msg: 'Invalid email or password' });

        const token = jwt.sign({ id: customer._id, role: customer.role }, process.env.JWT_SECRET, {
            expiresIn: "1m"
        });
        return res.status(200).json({
            token,
            Customer: {
                id: customer._id,
                firstname: customer.firstname,
                email: customer.email,
                role: customer.role
            }
        });


    } catch (error) {
        next(error)
    }

}