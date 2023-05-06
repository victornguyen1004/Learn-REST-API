const asyncHandler = require("express-async-handler")
const User = require("../models/user.js")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
//@desc register a user
//@POST POST/user/register
//@access public
const registerUser = asyncHandler(async (req,res) =>{
    const {username, email, passsword} = req.body
    if (!username || !email || !passsword){
        res.status(400)
        throw new Error("All fields are mandatory!")
    }
    const userAvailable = await User.findOne({email})
    if(userAvailable){
        res.status(400)
        throw new Error("User already registered !")
    }
    //hask password 
    const hashedPassword = await bcrypt.hash(passsword, 10)
    console.log ("Hashed password: ",hashedPassword)
    res.status(200).json({message:"Register the user"})
    const user = await User.create({
        username,
        email,
        passsword:  hashedPassword,
    })
})

//@desc login user
//@POST POST/user/login
//@access public
const loginUser = asyncHandler(async (req,res) =>{
    const {email, passsword} = req.body
    if(!email || !passsword){
        res.status(400)
        throw new Error("All fields are mendatory")
    }
    const user = await User.findOne({email})
    //compare password with hashedpassword 
    if(user && (await bcrypt.compare(passsword, user.passsword))){
        const accessToken = jwt.sign({
            user:{
                username: user.username,
                email: user.email,
                id: user.id,
            }
        },
        process.env.ACCESS_TOKEN_SECERT,
        {expiresIn: "1m"}
        )
        res.status(200).json({accessToken})        
    }else{
        res.status(401)
        throw new Error("email or password is not valid")
    }
    res.status(200).json({message:"Login user"})
})
//@desc Curent user infomation
//@POST Get/user/current
//@access private
const curentUser = asyncHandler(async (req,res) =>{
    res.status(200).json({message:"Current user"})
})

module.exports = {registerUser, loginUser, curentUser}