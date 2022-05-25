const express=require('express');
const router=express.Router();
const register=require('../Controller/EntryController')
const authController=require('../Controller/AuthController');
router.post('/registeruser',register.createEntry)
router.post('/applicant',register.appendApplicant)
router.post('/parents',register.appendParents)
router.post('/academic',register.appendAcademics)
router.post('/address',register.appendAddress)
router.post('/chat',register.chat)
router.get('/getTen/:mobile',register.tenSheet)
router.get('/getTwelve/:mobile',register.twelveSheet)
router.get('/getOther/:mobile',register.otherSheet)
router.get('/getTextSms',register.getTemplateData)
router.get('/getEmailSms',register.getTemplateData)

router.post('/postEmail',register.updateEmailMessage)
router.post('/postSms',register.updateOtpMessage)

module.exports = router;