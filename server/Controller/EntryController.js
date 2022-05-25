const Student= require('../Model/CollegeSchema');
const Admin=require('../Model/AdminSchema')
const formidable = require('formidable');
const { options } = require('../Routes/EntryRoutes');
const fs=require('fs');


exports.createEntry=async(req,res)=>{
    const data=req.body;
     
    if(!data)
    {
        return res.status(400).json({
            success:false,
            error:'Fields are Empty',
        })
    }
    const student=new Student(data);
    if (!student) {
        return res.status(400).json({ success: false, error: err })
    }
    console.log(student)
    await  student.save((err,student)=>{

        if(err)
        return res.status(400).json({
            error:error,
            message:'Student not registered!',
        })

        return res.status(201).json({
            success:true,
            id:student._id,
            message:'Student Registered',
        })
    })
}
exports.appendApplicant=async(req,res)=>{
    const data=req.body;
    if(!data)
    {
        return res.status(400).json({
            success:false,
            error:'Fields are Empty',
        })
    }
    var applicant_details={
        "firstname":data.firstname,
        "middlename":data.middlename,
        "lastname":data.lastname,
        "gender":data.gender,
        "aadhar_no":data.aadhar_no,
        "date_of_birth":data.date_of_birth,
        "choice_first":data.choice_first,
        "choice_second":data.choice_second,
        "choice_third":data.choice_third,
    };
    Student.findOneAndUpdate({mobile:data.mobile},{applicant_details:applicant_details,course:data.course},
        function (error, success) {
            if (error) {
              res.status(400).json({error})
            } else {
              res.status(200).json({success})
            }
        }
        )


}

exports.appendParents=async(req,res)=>{
    const data=req.body;
    if(!data)
    {
        return res.status(400).json({
            success:false,
            error:'Fields are Empty',
        })
    }
    var   parents_details={
        "father_name":data.father_name,
        "mother_name":data.mother_name,
        "father_occupation":data.father_occupation,
        "father_mobile":data.father_mobile,
        "mother_mobile":data.mother_mobile,
        "mother_occupation":data.mother_occupation,

    };
    Student.findOneAndUpdate({mobile:data.mobile},{parents_details:parents_details},
        function (error, success) {
            if (error) {
              res.status(400).json({error})
            } else {
              res.status(200).json({success})
            }
        }
        )


}

exports.appendAddress=async(req,res)=>{
    const data=req.body;
    if(!data)
    {
        return res.status(400).json({
            success:false,
            error:'Fields are Empty',
        })
    }
    var  address_details={
        "country":data.country,
        "state":data.state,
        "address_line":data.address_line,
        "house_no":data.house_no,
        "street":data.street,
        "landmark":data.landmark,
        "pincode":data.pincode
    };
    Student.findOneAndUpdate({mobile:data.mobile},{status:2,address_details:address_details},
        function (error, success) {
            if (error) {
              res.status(400).json({error})
            } else {
              res.status(200).json({success})
            }
        }
        )


}




exports.appendAcademics=(req,res)=>{
    let form=new formidable.IncomingForm();
     form.keepExtensions=true;
    //const fields=req.body;
    var  academic_details={};
   
    form.parse(req,(err,fields,file)=>{
        if(!fields)
        {
            return res.status(400).json({
                success:false,
                error:'Fields are Empty',
            })
        }
        if(err)
        {
            return res.status(400).json({
                success:false,
                error:err,
            })
        }
        academic_details={
            "type_of_exam":fields.type_of_exam,
            "rank":fields.rank,
            "application_no":fields.application_no,
            "ten_roll":fields.ten_roll,
            "twelve_roll":fields.twelve_roll,
            "other_roll":fields.other_roll,
            "ten_passing_year":fields.ten_passing_year,
            "twelve_passing_year":fields.twelve_passing_year,
            "other_passing_year":fields.other_passing_year,
           
            "ten_percent":fields.ten_percent,
            "twelve_percent":fields.twelve_percent,
            "other_percent":fields.other_percent,
            "ten_marksheet":0,
           
          
        }
        // console.log(fields)
        

   
            if(file[Object.keys(file)[0]])
            {
                academic_details.ten_marksheet={
                    "data":fs.readFileSync(file[Object.keys(file)[0]].path),
                "contentType":file[Object.keys(file)[0]].type,
                }
                console.log("hers is",academic_details.ten_marksheet);
            }
            if(file[Object.keys(file)[1]])
            {
                academic_details.twelve_marksheet={
                    "data":fs.readFileSync(file[Object.keys(file)[1]].path),
                    "contentType":file[Object.keys(file)[1]].type,
                }
            }
            if(file[Object.keys(file)[2]])
            {
                academic_details.other_marksheet={
                    "data":fs.readFileSync(file[Object.keys(file)[2]].path),
                "contentType":file[Object.keys(file)[2]].type,
                }
            }
        Student.findOneAndUpdate({mobile:fields.mobile},{academic_details:academic_details},
            function (error, success) {
                if (error) {
                return  res.status(400).json({error})
                } else {
                    console.log(error,"err",success)
                 return res.status(200).json({success,message:"n"})
                }
            }
            )

    })
   
                
}


exports.chat=(req,res)=>{
    console.log(req.body);
}
exports.tenSheet = async (req, res) => {
    await Student.findOne({ mobile: req.params.mobile },'academic_details.ten_marksheet', (err, sheet) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!sheet) {
            return res
                .status(404)
                .json({ success: false, error: `Sheet not found` })
        }
        return res.status(200).json({ success: true, data: sheet.academic_details })
    }).catch(err => console.log(err))
}
exports.twelveSheet = async (req, res) => {
    await Student.findOne({ mobile: req.params.mobile },'academic_details.twelve_marksheet', (err, sheet) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!sheet) {
            return res
                .status(404)
                .json({ success: false, error: `Sheet not found` })
        }
        return res.status(200).json({ success: true, data: sheet.academic_details })
    }).catch(err => console.log(err))
}
exports.otherSheet = async (req, res) => {
    await Student.findOne({ mobile: req.params.mobile },'academic_details.other_marksheet', (err, sheet) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!sheet) {
            return res
                .status(404)
                .json({ success: false, error: `Sheet not found` })
        }
        return res.status(200).json({ success: true, data: sheet.academic_details })
    }).catch(err => console.log(err))
}

exports.updateOtpMessage=async(req,res)=>{

    const {otpMessage}=req.body;
    
    Admin.findOneAndUpdate({name:"trident"},{otpMessage:otpMessage},
        function (error, success) {
            if (error) {
            return  res.status(400).json({error})
            } else {
                console.log(error,"err",success)
             return res.status(200).json({success,message:"n"})
            }
        }
        )

}
exports.updateEmailMessage=async(req,res)=>{

    const {emailMessage}=req.body;
    
    Admin.findOneAndUpdate({name:"trident"},{emailMessage:emailMessage},
        function (error, success) {
            if (error) {
            return  res.status(400).json({error})
            } else {
                console.log(error,"err",success)
             return res.status(200).json({success,message:"n"})
            }
        }
        )

}


exports.getTemplateData=async(req,res)=>{    

    Admin.findOne({name:"trident"},(err,data)=>{
        if (err) {
            return  res.status(400).json({err})
            } else {
               
             return res.status(200).json({data})
            }  
    })
}