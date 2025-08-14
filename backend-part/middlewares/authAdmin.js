// import jwt from "jsonwebtoken";

// const authAdmin = async (req, res, next) => {
//     try {
//         const { atoken } = req.headers;
//         if (!atoken) {
//             return res.json({
//                 success: false,
//                 message: "Not Authorized Login Again",
//             });
//         }
//         const token_decode = jwt.verify(atoken, process.env.JWT_SECRET);
//         if (
//             token_decode !==
//             process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD
//         ) {
//             return res.json({
//                 success: false,
//                 message: "Not Authorized Login Again",
//             });
//         }
//         next();
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message });
//     }
// };
// export default authAdmin;

//new

import jwt from "jsonwebtoken";

export default function authAdmin(req, res, next) {
    try {
        const authHeader = req.headers.authorization || "";
        const token = authHeader.startsWith("Bearer ")
            ? authHeader.slice(7)
            : authHeader;

        if (!token) {
            return res
                .status(401)
                .json({ success: false, message: "No token" });
        }

        jwt.verify(token, process.env.JWT_SECRET);

        next();
    } catch (err) {
        return res
            .status(401)
            .json({ success: false, message: "Unauthorized" });
    }
}
