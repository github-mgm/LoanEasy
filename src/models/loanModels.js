import mongoose from 'mongoose';

const loanSchema = new mongoose.Schema({
    typeOfLoan : {type: String, required : true, lowercase:true},
    loanUniqueName: {type:String, required : true},
    loanAmount : {type: mongoose.Decimal128, required: true },
    lendingOrgName: {type: String, required:true},
    borrowerUsername : {type:[Schema.ObjectId], ref : 'user'}
})
const loan = mongoose.model('loan', loanSchema)

export default loan