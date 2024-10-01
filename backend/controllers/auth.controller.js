const express = require("express");
const {userSchema} = require("../models/user.model");
const bcryptjs = require("bcryptjs");

const signup = async (req, res) =>{
    try{       
        console.log(req.body, "req.body");
        
        const { email, password, username } = req.body;

        if(!email || !password || !username){
            return res.status(400).json({
                success: false,
                message : "All fields are required"
            })
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailRegex.test(email)){
            return res.status(400).json({
                success: false,
                message : "Invalid email"
            })
        }

        if(password < 6){
            res.status(400).json({
                success: false,
                message : "password must be atleast 6 characters"
            })
        }

        const existingUserByEmail = await User.findOne({ email: email });

		if (existingUserByEmail) {
			return res.status(400).json({ 
                success: false, 
                message: "Email already exists" });
		}

        const existingUserByusername = await User.findOne({ username: username });
        
		if (existingUserByusername) {
			return res.status(400).json({ 
                success: false, 
                message: "Username already exists" });
		}

        const salt = await bcryptjs.genSalt(10);
		const hashedPassword = await bcryptjs.hash(password, salt);

        const PROFILE_PICS = ["/avatar1.png", "/avatar2.png", "/avatar3.png"];

		const image = PROFILE_PICS[Math.floor(Math.random() * PROFILE_PICS.length)];

        const newUser = new User({
			email,
			password : hashedPassword,
			username,
            image,
		});

        await newUser.save();

        generateTokenAndSetCookie(newUser._id, res);
		await newUser.save();

        res.status(201).json({
			success: true,
			user: {
				...newUser._doc,
				password: "",
			},
		});

    }
    catch(err){
        console.log("Error in signup controller", err.message);
		res.status(500).json({ 
            success: false, 
            message: "Internal Server Error" });
    }
}
const login = async (req, res) =>{
    try {
		const { email, password } = req.body;

		if (!email || !password) {
			return res.status(400).json({ 
                success: false, 
                message: "All fields are required" });
		}

		const user = await User.findOne({ email: email });
		if (!user) {
			return res.status(404).json({ 
                success: false, 
                message: "Invalid credentials" });
		}
		const isPasswordCorrect = await bcryptjs.compare(password, user.password);

		if (!isPasswordCorrect) {
			return res.status(400).json({ 
                success: false, 
                message: "Invalid credentials" });
		}
		generateTokenAndSetCookie(user._id, res);

		res.status(200).json({
			success: true,
			user: {
				...user._doc,
				password: "",
			},
		});
	} catch (error) {
		console.log("Error in login controller", error.message);
		res.status(500).json({ success: false, message: "Internal server error" });
	}
}

const logout = async (req, res) =>{
    try {
		res.clearCookie("jwt-netflix");
		res.status(200).json({ 
            success: true, 
            message: "Logout successfully" });
	} catch (error) {
		console.log("Error in logout controller", error.message);
		res.status(500).json({ 
            success: false, 
            message: "Internal server error" });
	}
}

module.exports = {signup, login,logout}