import jwt from 'jsonwebtoken'
const adminAuth =async(req,res,next)=>{
 try {
    const {token} = req.headers;
    if(!token){
        return res.json({success:false, message:"Not Authorised"});

    }
    const token_decode = jwt.verify(token,process.env.JWT_SECRET);
    if(token_decode !== process.env.admin_email + process.env.admin_password){
        return res.json({success:false, message:"Not Authorised"});
    }
    next();
 } catch (error) {
    console.log(error);
    return res.json({success:false, message:error.message});
    
 }
}
export default adminAuth;