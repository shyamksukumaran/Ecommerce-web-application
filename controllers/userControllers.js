const User = require("../models/userModel")
const bcrypt = require('bcrypt');

const { handleError } = require("../utils/error");
const generateToken = require("../utils/token");
const req = require("express/lib/request");
const res = require("express/lib/response");



  

const userSignup = async(req,res)=>{ 
    try {
        // 1. Extract User details from the request body 
        const {name, email, phone, password} = req.body

        // 2. Check if any required field is missing
        if(!name || !email || !phone || !password ) {
            return res.status(400).json({message: "All fields are required"})
        }

        
        // 3. Check if a user with the given email already exists in the database
        const userExist = await User.findOne({email:email}) 
        if(userExist){
            return res.status(400).json({message:"User already exists"})
        }

        // 4. Hash the password using bcrypt
        const hashedPassword = bcrypt.hashSync(password, 10);

        // 5. Create a new user document -  with the provided details ( 
        const newUser = new User({name, email, phone, password:hashedPassword, role:"user"})
        await newUser.save()     
        
       
        // const token = generaToken(newUser,'user') // for Authorization 
        // res.cookie('token',token);


        // 7. Respond with a success message
        res.status(200).json({message: "User create successfully", data: newUser })

    } catch (error) {
        res.status(error.statusCode || 500).json({message:error.message || "Internal Server Error"})
    }
}

const userLogin = async(req,res)=>{
    try {
        const {email,password}= req.body

        if(!email || !password){
           return res.status(400).json({message:"All fields are required"})
        }
        const userExist = await User.findOne({email:email}) 
        if(!userExist){
            return res.status(400).json({message:"User does not exists"})
        }

// user frotend typed passwrods and database hashed signup passwords check and compairing 

const isuserpassword = bcrypt.compareSync(password,userExist.password);
       if (!isuserpassword){
       return res.status(400).json({message:"password not match try angin"})
       }

       const token = generateToken(userExist,'user') // for Authorization 
       res.cookie('token',token);

      

       // 7. Respond with a success message

       res.status(200).json({message: "User login successfully", data: userExist })
    } catch (error) {
        res.status(error.statusCode || 500).json({message:error.message || "Internal Server Error"})
    }
}

const userProfile = async(req,res,next)=>{
    try {
        const userid="gfgf"
        const userProfile= await user.findbyid(userid)



    } catch (error) {
        res.status(error.statusCode || 500).json({message:error.message || "Internal Server Error"})

    }
}











