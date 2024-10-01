const jwt = require("jsonwebtoken")

const ENV_VARS = require("../config/envVars")

export const generateTokenAndSetCookie = (userId, res) => {
	const token = jwt.sign({ userId }, ENV_VARS.JWT_SECRET, { expiresIn: "15d" });

	res.cookie("jwt-netflix", token, {
		maxAge: 15 * 24 * 60 * 60 * 1000, 
		httpOnly: true, 
		sameSite: "strict", 
		secure: ENV_VARS.NODE_ENV !== "development",
	});

	return token;
}