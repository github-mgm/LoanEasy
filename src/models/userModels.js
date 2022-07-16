import mongoose, { Schema } from 'mongoose';


const userSchema = mongoose.Schema({
    userName : {type: String},
    firstName : {type:String},
    lastName : {type: String},
    DOB : {type: Date},
    location : {type:Schema.ObjectId, ref : 'location'},
    PANNumber: {type:String},
    adharNumber:{type:String},
    creditScore:{type:Number},
    nomineeFullName: {type:String},
    haveInsurance:{type:Boolean},
    loanTaken : {type:Schema.ObjectId, ref:'loan'},
    anyExistingLoan:{type:Boolean}
})

const user = mongoose.model('user', userSchema)

export default user