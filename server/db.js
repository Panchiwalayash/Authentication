const mongoose=require("mongoose");
const mongoURI="mongodb://localhost:27017/NewAuth?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"

const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to mongodb");
    })
}

module.exports=connectToMongo;