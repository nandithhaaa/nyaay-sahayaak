const express =require('express');

const {signupUser,loginUser,resetpwd}=require('../controllers/userController')
//const { addLawyer, getLawyer } = require('../controllers/lawyerController');

const router =express.Router();

router.post('/login',loginUser);


router.post('/signup',signupUser);

router.put('/resetpwd',resetpwd)

//router.post('/add-lawyer',addLawyer)

//router.get('/get-lawyers',getLawyer)


module.exports=router


