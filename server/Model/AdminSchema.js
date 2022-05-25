const mongoose=require('mongoose');

const AdminSchema = new mongoose.Schema({
   name:{
       type:String,
        default:"trident"
   },
   otpurl:String,
   otpMessage:String,
   emailId:String,
   emailPass:String,
   emailMessage:String,
  });

  
const Admin = mongoose.model('admin', AdminSchema);

module.exports=Admin;