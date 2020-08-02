const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require('path');
const dbConfig = require('./Config/ServerSetting');
const UserRoute = require('./LogInRoute');


const app = express();
const connectingPort =  process.env.port || 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")))


app.use('/User', UserRoute);

if(process.env.NODE_ENV === "production")
{
    app.use(express.static('client/build'));
    app.get("*", (req,res) => {
        res.sendFile(path.resolve(__dirname, client, build, 'index.html'));
    })
}

mongoose.connect(dbConfig.mongoURI)
        .then(() =>  console.log("Db is successfully connected"))
        .catch(error => console.log("there is an erro while connecting db => ", error.toString()));

app.listen(connectingPort, () => {
    console.log("Yehh, Our server is connected");
});
