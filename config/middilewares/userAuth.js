const userAuth = async(res,res,next)=>{
    try {
        
    const token = req.cookies.token;
    if(!token){
        return res.status(400).json({message :"unathozrized : no token "})
    }
    const tokenDeoded = jwt.verify(token,process.env.JWT_SECRET);
    if(!tokenDeoded){
        return res.status(401).json({message:"token not authorized"})
    }
   req.user = tokenDeoded
   next();

    } catch (error) {
        
        return res.status(500).json({message:"internal server issue"})
  
    }
};