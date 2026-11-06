import mongoose from 'mongoose';

const memberSchema = new mongoose.Schema({
  owner:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
    },
    name:{
    type : String,
    required : true,
    trim : true 
   },
   relation:{
    type : String,
    enum:["self","parent","child","sibling","spouse","friend","other"],
    required : true,
   },
   birthYear:{
    type: Number,
    min: 1900,
    max: new Date().getFullYear()
   }  
  
   
},
  {timestamps : true}
);
    
const Member = mongoose.model('Member',memberSchema);
export default Member;
