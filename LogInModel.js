const mongoose = require('mongoose');
const schema  = mongoose.Schema;

const model =  new schema({

    UserName :
    {
        type: String,
        required: true
    },

    Password :
    {
        type: String,
        required: true
    }
});

module.exports = logInModel = mongoose.model("UserModel", model);