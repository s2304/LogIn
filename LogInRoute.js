const UserModel = require('./LogInModel');
const express = require('express');
const router = express.Router();
const cors   = require("cors");

router.use(cors({'content-type': 'application/json'}));

router.post('/LogIn', (req,res,next) => {

    var UserName = req.body.UserId;
    var Password = req.body.Passcode;

    UserModel.find({UserName: UserName})
            .then(result => {            
                if(result.length > 0)
                {
                    res.status(200).send("User already there");
                }
                else
                {                   
                    var newUser = new UserModel({
                        UserName: UserName,
                        Password: Password
                    })

                    newUser.save()
                        .then( success => {
                            if(success)
                            {                               
                                return res.status(200).json({
                                    Success: true, 
                                    UserDetails: success
                                });
                            }
                            else{
                               
                                res.status(400).json({
                                    Success: false, 
                                    UserDetails: {}
                                });
                            }
                        })
                        .catch(error => 
                            {
                               return res.status(400).json({
                                    Success: false, 
                                    UserDetails: {}
                                });
                            })
                }
            })
            .catch(error => 
                {
                   return res.status(400).json({
                        Success: false, 
                        UserDetails: {},
                        Error: error.toString()
                    });
                })

});

module.exports = router;


