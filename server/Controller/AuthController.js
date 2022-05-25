const jwt=require('jsonwebtoken');
const Student=require('../Model/CollegeSchema');
exports.protect=async (req,res,next)=>{
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    let secret="happpy";
    let decodedData;
    console.log("token is "+token);
    try
    {
    if (token.length>0)
    {
        decodedData = jwt.verify(token, secret);
        console.log(decodedData);
        req.userId = decodedData?.id;
        req.email=decodedData?.email;
        const currentUser = await Student.findById(req.userId);
        if (!currentUser)
         {
         return res.status(400).json({
            status:"aUser does not matches"
        })
     }
        next();
    } 
   } 
catch (error) {
  return res.status(400).json({"message":"Inavlid User"});
}
}