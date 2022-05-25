const Student=require('../Model/CollegeSchema');
const jwt=require('jsonwebtoken');
const Admin=require('../Model/AdminSchema')

var nodemailer = require('nodemailer');
var axios=require('axios');
var otp;
exports.postData=async (req,res)=>{
    const posts=req.body;
    console.log(posts.mobile);
    try
    {
   const result =await Student.create(posts);  
    let secret="happpy";
  const token=jwt.sign({email:posts.email,id:result._id,mobile:posts.mobile},secret,{expiresIn:"2h"});
  console.log(token);
    res.status(200).json({data:"200",token:token})
    }
    catch(err)
    {
      console.log(err);
        res.status(409).json({
            status:"Failure in  Insertion"
        })
    } 
}
exports.paymentperm=async(req,res)=>{
  try{
    const d1=await Student.find().select('name course email payment');
    console.log(d1);
    res.status(200).json({data:d1});
  }
  catch(err)
  {
    res.status(400).json({
      status:"Invalid Data"
  })
  }
}
exports.normalfilter=async(req,res)=>{
  try{
    const d1=await Student.find().select('name course email mobile');
    console.log(d1);
    res.status(200).json({data:d1});
  }
  catch(err)
  {
    res.status(400).json({
      status:"Invalid Data"
  })
  }
}
exports.branchfind=async(req,res)=>{
    var arr=[];
   try{
        const d1=await Student.find({course:'B.Tech'});
        const d2=await Student.find({course:'BCA'});
        const d3=await Student.find({course:'MCA'});
        const d4=await Student.find({course:'BBA'});
        const d5=await Student.find({course:'MBA'});
        const d6=await Student.find({course:'M.Sc.'});
        const d7=await Student.find({course:'B.Sc.'});


        //console.log(d1.length+"  "+d2.length+"   "+" "+d3.length+"  "+d4.length+"  "+d5.length+" "+d6.length+"  "+d7.length);
        arr[0]=d1.length;
        arr[1]=d2.length;
        arr[2]=d3.length;
        arr[3]=d4.length;
        arr[4]=d5.length;
        arr[5]=d6.length;
        arr[6]=d7.length;
        console.log(arr);
        res.status(200).json({data:arr});

   } 
   catch(err)
   {
    res.status(400).json({data:'invalid data'});
   }
}
exports.branchtod=async(req,res)=>{
  var arr=[];
 console.log(new Date().toISOString().slice(0, 10));
 const todaydate=new Date().toISOString().slice(0, 10);
 try{
      const d1=await Student.find({ $and:[{course:'B.Tech'},{registrationtime:todaydate}]});
       const d2=await Student.find({ $and:[{course:'BCA'},{registrationtime:todaydate}]});
       const d3=await Student.find({ $and:[{course:'MCA'},{registrationtime:todaydate}]});
       const d4=await Student.find({ $and:[{course:'BBA'},{registrationtime:todaydate}]});
       const d5=await Student.find({ $and:[{course:'MBA'},{registrationtime:todaydate}]});
       const d6=await Student.find({ $and:[{course:'M.Sc.'},{registrationtime:todaydate}]});
       const d7=await Student.find({ $and:[{course:'B.Sc.'},{registrationtime:todaydate}]});
      console.log(d1.length+"  "+d2.length+"   "+" "+d3.length+"  "+d4.length+"  "+d5.length+" "+d6.length+"  "+d7.length);
      arr[0]=d1.length;
      arr[1]=d2.length;
      arr[2]=d3.length;
      arr[3]=d4.length;
      arr[4]=d5.length;
      arr[5]=d6.length;
      arr[6]=d7.length;
      console.log(arr);
      res.status(200).json({data:arr});
 } 
 catch(err)
 {
  res.status(400).json({data:'invalid data'});
 }
}
exports.changestatus=async(req,res)=>{
  var arr=[];
 try{
      const d1=await Student.find({status:'1'});
      const d2=await Student.find({status:'2'});
      const d3=await Student.find({status:'3'});
     


      //console.log(d1.length+"  "+d2.length+"   "+" "+d3.length+"  "+d4.length+"  "+d5.length+" "+d6.length+"  "+d7.length);
      arr[0]=d1.length;
      arr[1]=d2.length;
      arr[2]=d3.length;
      
      console.log(arr);
      res.status(200).json({data:arr});

 } 
 catch(err)
 {
  res.status(400).json({data:'invalid data'});
 }
}
exports.complexfilter=async(req,res)=>{
  let data=req.body;
  console.log(data);
  console.log(data.length);
  let str="";
  var arr1=new Array();
  for(let i=0;i<data.length;i++)
  {
     arr1.push(data[i]);
     str=str+data[i]+" ";
  }
  delete arr1[0];
  console.log(str);
  try
  {
  const d1=await Student.find().select(str);
  console.log(d1);
  res.status(200).json({data:d1,heading:arr1});
  
 } 
 catch(err)
 {
  res.status(400).json({data:'invalid data'});
 }
}
exports.choice=async(req,res)=>{
  var arr=[];
 try{
      const d1=await Student.find({'applicant_details.choice_first':'ETC'});
      const d2=await Student.find({'applicant_details.choice_first':'CS&IT'});
      const d3=await Student.find({'applicant_details.choice_first':'CSE'});
      const d4=await Student.find({'applicant_details.choice_first':'CSEAIML'});
      const d5=await Student.find({'applicant_details.choice_first':'CST'});
      const d6=await Student.find({'applicant_details.choice_first':'EEE'});
      const d7=await Student.find({'applicant_details.choice_first':'CIVIL'});
      const d8=await Student.find({'applicant_details.choice_first':'BIOTECH'});

      //console.log(d1.length+"  "+d2.length+"   "+" "+d3.length+"  "+d4.length+"  "+d5.length+" "+d6.length+"  "+d7.length);
      arr[0]=d1.length;
      arr[1]=d2.length;
      arr[2]=d3.length;
      arr[3]=d4.length;
      arr[4]=d5.length;
      arr[5]=d6.length;
      arr[6]=d7.length;
      arr[7]=d8.length;
      res.status(200).json({data:arr});
 } 
 catch(err)
 {
  res.status(400).json({data:'invalid data'});
 }
}
exports.choicetwo=async(req,res)=>{
  var arr=[];
 try{
      const d1=await Student.find({'applicant_details.choice_second':'ETC'});
      const d3=await Student.find({'applicant_details.choice_second':'CSE'});
      const d4=await Student.find({'applicant_details.choice_second':'CSEAIML'});
      const d5=await Student.find({'applicant_details.choice_second':'CST'});
      const d6=await Student.find({'applicant_details.choice_second':'EEE'});
      const d2=await Student.find({'applicant_details.choice_second':'CS&IT'});
      const d7=await Student.find({'applicant_details.choice_second':'CIVIL'});
      const d8=await Student.find({'applicant_details.choice_second':'BIOTECH'});

      //console.log(d1.length+"  "+d2.length+"   "+" "+d3.length+"  "+d4.length+"  "+d5.length+" "+d6.length+"  "+d7.length);
      arr[0]=d1.length;
      arr[1]=d2.length;
      arr[2]=d3.length;
      arr[3]=d4.length;
      arr[4]=d5.length;
      arr[5]=d6.length;
      arr[6]=d7.length;
      arr[7]=d8.length;
      res.status(200).json({data:arr});

 } 
 catch(err)
 {
  res.status(400).json({data:'invalid data'});
 }
}
exports.choicethree=async(req,res)=>{
  var arr=[];
 try{
      const d1=await Student.find({'applicant_details.choice_third':'ETC'});
      const d3=await Student.find({'applicant_details.choice_third':'CSE'});
      const d4=await Student.find({'applicant_details.choice_third':'CSEAIML'});
      const d5=await Student.find({'applicant_details.choice_third':'CST'});
      const d6=await Student.find({'applicant_details.choice_third':'EEE'});
      const d2=await Student.find({'applicant_details.choice_third':'CS&IT'});
      const d7=await Student.find({'applicant_details.choice_third':'CIVIL'});
      const d8=await Student.find({'applicant_details.choice_third':'BIOTECH'});

      //console.log(d1.length+"  "+d2.length+"   "+" "+d3.length+"  "+d4.length+"  "+d5.length+" "+d6.length+"  "+d7.length);
      arr[0]=d1.length;
      arr[1]=d2.length;
      arr[2]=d3.length;
      arr[3]=d4.length;
      arr[4]=d5.length;
      arr[5]=d6.length;
      arr[6]=d7.length;
      arr[7]=d8.length;
      res.status(200).json({data:arr});

 } 
 catch(err)
 {
  res.status(400).json({data:'invalid data'});
 }
}
exports.findlen=async(req,res)=>{
  const data=req.body;
  console.log(data.mobile+" "+data.email);
  const data1={mobile:data.mobile};
  const data2={email:data.email};
  try
  {
  const result=await Student.find({$or:[data1,data2]});
  console.log(result.length);
  
  res.status(200).json({data:result.length});
  }
  catch(err)
  {
    res.status(400).json({data:'invalid data'});
  }
}
exports.checkotp=async(req,res)=>{
  const data=req.body;
  const userotp=data.otp;
  const userot= parseInt(userotp);
  if(userot===otp)
  {
    console.log("correct otp");
    res.status(200).json({data:"1"});
  } 
  else
  {
    console.log("Incorrect otp");
    res.status(400).json({data:"1"});
  }  
}
exports.log=async(req,res)=>{
  const mobile=req.body;
  try{
     const data=await Student.find(mobile).select('role status');
     console.log(data);
     res.status(200).json({data:data});
  }catch(err)
  {
    res.status(400).json("Invalid Data");
  } 
}
exports.findall=async(req,res)=>{
  const mobile=req.body;
  try{
     const data=await Student.find(mobile);
     console.log(data);
     res.status(200).json({data:data});
  }catch(err)
  {
    res.status(400).json("Invalid Data");
  } 
}
exports.payment=async(req,res)=>{
  const email=req.body;
  const data="";
  console.log(email);
  try{
     const finddata=await Student.find(email);
     console.log(finddata[0].payment+"  "+typeof finddata[0].payment);
     if(finddata[0].payment==0)
     {
           await Student.findOneAndUpdate(email,{payment:"1"});
     }       
     else
         await Student.findOneAndUpdate(email,{payment:"0"});    
     res.status(200).json("Successfull updation");
  }catch(err)
  {
    res.status(400).json("Invalid Data");
  } 
}
exports.loginupdate=async(req,res)=>{
  const data=req.body;
  try{
    const result=await Student.find(data);
    const d=result[0].logincurrent;
    console.log("last will be");
    console.log(d);
    const lastlogin={loginlast:d};
    const start = new Date();
    console.log(start);
    const currentlogin=start ;
    const curr={ logincurrent:currentlogin}
    console.log(curr);
    console.log(lastlogin);
    await Student.updateOne({mobile:result[0].mobile},{counteroflogin:result[0].counteroflogin+1,logincurrent:currentlogin,loginlast:d})
    res.status(200).json({success:true})
  }
  catch(err)
  {
    console.log(err);
    res.status(400).json({data:"Invalid"})
  }
}
exports.numcheck = async (req, res) => {
  const data = req.body;
  console.log(data);
  try {
    const result = await Student.find(data);

    console.log("Result lengh i s");
    console.log(result);
    if (result.length === 1) {
      console.log("hello");
      console.log(
        result[0].email +
          " " +
          result[0].counteroflogin +
          "  " +
          typeof result[0].counteroflogin
      );

      let secret = "happpy";
      const token = jwt.sign(
        { email: result[0].email, id: result[0]._id, mobile: result[0].mobile },
        secret,
        { expiresIn: "2h" }
      );
      //console.log(token);
      otp = Math.floor(Math.random() * 100000);
        console.log("S",result[0].email)
      //NODEMAILER START
      const transporter = nodemailer.createTransport({
        port: 465, // true for 465, false for other ports
        host: "smtp.gmail.com",
        auth: {
          user: "akashkumarhzb202@gmail.com",
          pass: "happy2001@",
        },
        secure: true,
      });
      const {otpMessage,emailMessage}=await Admin.findOne({name:"trident"});
     const newEmailMessage= emailMessage.replace("{otp}",otp);
      const mailData = {
        from: "akashkumarhzb202@gmail.com", // sender address
        to: `${result[0].email}`, // list of receivers
        subject: "Trident Academy of Technology",
        text: "That was easy!",
        // html: `<b>Hey there! </b> <br> Your OTP is ${otp}<br/>  <br> Your OTP is valid for 2 minutes only...<br/>`,
        html:newEmailMessage
      };
    
      transporter.sendMail(mailData, function (err, info) {
        if (err) {
          console.log(err);
          res.status(400).json({ success: true, data: 0 });
        } else {
          console.log(info);
          res.status(200).json({ success: true, data: otp });
        }
      });

      //NODEMAILER END

      let messageSms=otpMessage.replace("{otp}",otp);
       messageSms=messageSms.replace("{mobile}",data.mobile);
      const response = await axios.get(
        // `https://www.fast2sms.com/dev/bulkV2?authorization=hcrG49eMjLnx85iswuFkBHmJD23QgqztTENWYCvUXpOSZ0aK6AdNW5VXJ9Bg6CtFyUMhTGmAz1L0oHIw&route=v3&sender_id=TXTIND&message=OTP is 
        // ${otp}
        //   \n Your otp is valid for 2 minutes only...&language=english&flash=0&numbers=
        //   ${data.mobile}`
        messageSms
      );

      res.status(200).json({ success: true, data: otp, token: token });
    }
    if (result.length === 0) {
      console.log("hello ");
      res.status(200).json({ data: 1 });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "Inavlid data",
    });
  }
};
exports.sendOtp = async (req, res) => {
  try
  {


  otp = Math.floor(Math.random() * 100000);
  const data = req.body;
  console.log(data.mobile + "  " + data.email + " " + otp);

        //NODEMAILER START
        const transporter = nodemailer.createTransport({
          port: 465, // true for 465, false for other ports
          host: "smtp.gmail.com",
          auth: {
            user: "akashkumarhzb202@gmail.com",
            pass: "happy2001@",
          },
          secure: true,
        });
        const {otpMessage,emailMessage}=await Admin.findOne({name:"trident"});
  
        const newEmailMessage= emailMessage.replace("{otp}",otp);
       
        const mailData = {
          from: "akashkumarhzb202@gmail.com", // sender address
          to: `${data.email}`, // list of receivers
          subject: "Trident Academy of Technology",
          text: "That was easy!",
          // html: `<b>Hey there! </b> <br> Your OTP is ${otp}<br/>  <br> Your OTP is valid for 2 minutes only...<br/>`,
          html:newEmailMessage
        };
      
        transporter.sendMail(mailData, function (err, info) {
          if (err) {
            console.log(err);
            res.status(400).json({ success: true, data: 0 });
          } else {
            console.log(info);
            res.status(200).json({ success: true, data: otp });
          }
        });

        //NODEMAILER END

        

        let messageSms=otpMessage.replace("{otp}",otp);
        messageSms=messageSms.replace("{mobile}",data.mobile);
  const response = await axios.get(
    // "https://www.fast2sms.com/dev/bulkV2?authorization=hcrG49eMjLnx85iswuFkBHmJD23QgqztTENWYCvUXpOSZ0aK6AdNW5VXJ9Bg6CtFyUMhTGmAz1L0oHIw&route=v3&sender_id=TXTIND&message=Your OTP is " +
    //   otp +
    //   "\n Your Otp is valid for 2 minutes &language=english&flash=0&numbers=" +
    //   data.mobile
   messageSms
  );
  res.status(200).json({ success: true, data: otp });
  
}
catch(err)
{
  console.log(err);
  res.status(400).json({ success: true, data: 0 });
}
}