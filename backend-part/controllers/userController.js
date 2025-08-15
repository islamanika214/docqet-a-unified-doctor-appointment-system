import validator from "validator";

import bcrypt from "bcrypt";

const registerUser = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;

        if (!fullName || !email || !password) {
            return res.json({ success: false, message: "Missing Details" });
        }
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Enter a valid email" });
        }
        if (password.length < 8) {
            return res.json({
                success: false,
                message: "Enter a strong password",
            });
        }

        // hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const userData = {
            fullName,
            email,
            password: hashedPassword,
        };
    } catch (error) {}
};
