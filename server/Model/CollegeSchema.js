const mongoose=require('mongoose');
const enquriySchema = mongoose.Schema({
    mobile: {type:String},
    name:String,
    email:String,
    course:String,
    role:{
        type:String,
        default:"0"
    },
    status:{
        type:String,
        default:"1"
    },  
    counteroflogin:{type:Number,default:0},
    registrationtime : { type:String
    },
    logincurrent : { 
        type : Date, 
        default: Date.now 
    },
    loginlast:{
        type : Date, 
        default: Date.now 
    },
    payment:{
        type:String,
        default:"0"
    },
    applicant_details:{
        firstname:
        {
            type:String,
            default:"Not Available"
        },    
        middlename:{
            type:String,
            default:"Not Available"
        }, 
        lastname:{
            type:String,
            default:"Not Available"
        },    
        gender:{
            type:String,
            default:"Not Available"
        },    
        aadhar_no:{
            type:Number,
            default:0
        },    
        date_of_birth:{
            type:   Date,
            default:Date.now
        },    
        choice_first:{
            type:String,
            default:"Not Available"
        },    
        choice_second:{
            type:String,
            default:"Not Available"
        },    
        choice_third:{
            type:String,
            default:"Not Available"
        }
    },
    parents_details:{
        father_name:{
            type:String,
            default:"Not Available"
        },
        mother_name:{
            type:String,
            default:"Not Available"
        },
        father_occupation:{
            type:String,
            default:"Not Available"
        },
        father_mobile:
        {
            type:Number,
            default:0,
        },
        mother_mobile:{
            type:Number,
            default:0,
        },
        mother_occupation:{
            type:String,
            default:"Not Available"
        }
    },
    address_details:{
        country:{
            type:String,
            default:"Not Available"
        },
        state:{
            type:String,
            default:"Not Available"
        },
        address_line:{
            type:String,
            default:"Not Available"
        },
        house_no:{
            type:String,
            default:"Not Available"
        },
        street:{
            type:String,
            default:"Not Available"
        },
        landmark:{
            type:String,
            default:"Not Available"
        },
        pincode:{
            type:Number,
            default:0
        },
    },
    academic_details:{
        type_of_exam:{
            type:String,
            default:"Not Available"
        },
        rank:{
            type:Number,
            default:0
        },
        application_no:{
            type:String,
            default:"Not Available"
        },
        ten_roll:{
            type:String,
            default:"Not Available"
        },
        twelve_roll:{
            type:String,
            default:"Not Available"
        },
        other_roll:{
            type:String,
            default:"Not Available"
        },
        ten_passing_year:{
            type:String,
            default:"Not Available"
        },
        twelve_passing_year:{
            type:String,
            default:"Not Available"
        },
        other_passing_year:
        {
            type:String,
            default:"Not Available"
        },
        ten_percent:
        {
            type:String,
            default:"Not Available"  
        },
        twelve_percent:
        {
            type:String,
            default:"Not Available"  
        },
        other_percent:
        {
            type:String,
            default:"Not Available"  
        },
        ten_marksheet:{
            data:Buffer,
            contentType:String
        },
        twelve_marksheet:{
            data:Buffer,
            contentType:String
        },
        other_marksheet:{
            data:Buffer,
            contentType:String
        },
        
    }
})

const Student = mongoose.model('Student', enquriySchema);

module.exports=Student;



