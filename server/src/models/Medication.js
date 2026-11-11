import mongoose from "mongoose";

const medicationSchema = new mongoose.Schema(
  {
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index: true,
    },
    member: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Member",
        required: true,
        index: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    form: {
        type: String,
        enum: ["tablet", "capsule", "syrup", "injection", "cream", "ointment", "drops", "inhaler", "other"],
        required: true,
    },
    instructions:{
        type: String,
        trim: true,
        maxlength: 500,

    },
    stock:{
      type: Number,
      min: 0,  
    },
    isActive: {
        type: Boolean,
        default: true,
    },
  },
  { timestamps: true }
);

const Medication = mongoose.model("Medication", medicationSchema);
export default Medication;

