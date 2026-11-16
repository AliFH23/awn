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
    instructions: {
      type: String,
      trim: true,
      maxlength: 500,
    },
    dosage: {
      amount: {
        type: Number,
        min: 0,
      },
      unit: {
        type: String,
        enum: ["mg", "g", "mcg", "ml", "IU", "tablet", "capsule", "drop", "puff", "unit", "other"],
      },
    },
    schedule: {
      frequency: {
        type: String,
        required: true,
        enum: ["daily", "interval", "weekly", "as_needed"], 
      },
      times: [
        {
          type: String,
          match: /^([01]\d|2[0-3]):[0-5]\d$/, 
        },
      ],
      intervalHours: {
        type: Number,
        min: 1,
        max: 24,
      },
      daysOfWeek: [ 
        {
          type: Number, 
          min: 0,       
          max: 6,       
        },
      ],
    },
    stock: {
      type: Number,
      min: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    startDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    endDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

const Medication = mongoose.model("Medication", medicationSchema);
export default Medication;