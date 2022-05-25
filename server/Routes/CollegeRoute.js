const express=require('express');
const route=express.Router();
const college=require('../Controller/CollegeController');
const authContoller=require('../Controller/AuthController');
route.post('/postdata',college.postData);

route.post('/otpgen',college.sendOtp)

route.post('/checkotp',college.checkotp)


route.post('/numcheck',college.numcheck)

route.post('/totlen',college.findlen);

route.post('/loginupdate',college.loginupdate)

route.get('/findbranch',college.branchfind)
route.get('/todbranch',college.branchtod)
route.get('/getstatus',college.changestatus)
route.get('/getchoiceone',college.choice)
route.get('/getchoicetwo',college.choicetwo)
route.get('/getchoicethree',college.choicethree)
route.get('/paymentpermission',college.paymentperm)
route.get('/normalfilter',college.normalfilter)
route.post('/complexfilter',college.complexfilter)
route.post('/findall',college.findall)
route.post('/payment',college.payment)
route.post('/log',college.log)
module.exports=route;