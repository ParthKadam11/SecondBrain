import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();
const jwt_secret = process.env.JWT_SECRET;
export const userAuth = (req, res, next) => {
    const header = req.headers["authorization"];
    const decoded = jwt.verify(header, jwt_secret);
    if (decoded) {
        //@ts-ignore
        req.userId = decoded.id;
        next();
    }
    else {
        res.status(403).json({
            message: "You are not Logged in!!"
        });
    }
};
//# sourceMappingURL=middleware.js.map