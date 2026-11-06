import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name:{
    type : String,
    required : true,
    trim : true 
  },
  email:{
    type : String,
    required : true,
    trim : true,
    unique : true,
    lowercase : true
  },
  password:{
    type: String,
    required : true,
    minlength : 8,
    select : false
  },
  language:{
    type : String,
    enum :["en","ar"],
    default : "ar"
  },
  timezone:{
    type:String,
    default:"Asia/Amman",
  },

  

},
  {timestamps : true}
);


const User = mongoose.model('User',userSchema);
export default User;