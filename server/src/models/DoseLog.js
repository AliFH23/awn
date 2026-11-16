import mongoose from "mongoose";

const doseLogSchema = new mongoose.Schema({
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    },
    member:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Member',
        required: true,
    },
    medication:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Medication',
        required: true,
        index: true
    },
    scheduledAt:{
        type: Date,
        required: true,
    },
    status:{
        type: String,
        enum:["taken","pending","missed","skipped"],
        default:"pending"
    },
    takenAt:{
        type: Date,
    },
},

    {timestamps: true}
);
doseLogSchema.index({ medication: 1, scheduledAt: 1 }, { unique: true });


const DoseLog = mongoose.model('DoseLog',doseLogSchema);
export default DoseLog;