import mongoose from 'mongoose';

const locationSchema = new mongoose.Schema({
    locationUniqueName:{type:String, required:true},
    countryName: {type:String, required:true},
    stateName: {type:String, required: true},
    districtName:{type:String, required: true},
    pinCode : {type:Number, required:true},
    addressLine1 : {type:String, required:true},
    addressLine2 : {type:String, required:true},
    phoneNumber: {type:Number, required:true}
})

const location = mongoose.model('location', locationSchema)

export default location