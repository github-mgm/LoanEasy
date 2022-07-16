import mongoose from 'mongoose';



const orgSchema = new mongoose.Schema({
    orgName: { type: String },
    orgUniqueName: { type: String },
    typeOfOrg: { type: String, required: true, trim: true, lowercase: true },
    totalLoanOffered: { type: Number, required: true },
    totalLoanAmount: { type: Number, required: true },
    typesOfLoans: [{ type: String }],
    locationServed: [{ type: String }],
});

const Org = mongoose.model('org', orgSchema);

const findOrgByUniqueName = (uniqueName) => {

    const org = Org.find({ orgUniqueName: uniqueName }).then(
        (result) => {
            return 1
        }
    ).catch(
        (err) => {
            console.log(err);
            console.log("Some error while fetching the data from DB")
        }
    )
}
const saveOrg = async (data) => {
    const orgObj = new Org({
        orgName: data.orgName,
        orgUniqueName: data.orgUniqueName,
        typeOfOrg: data.typeOfOrg,
        totalLoanOffered: data.totalLoanOffered,
        totalLoanAmount: data.totalLoanAmount,
        typesOfLoans: data.typesOfLoans,
        locationServed: data.locationServed
    })
    orgObj.save().then(
        (val) => {
            console.log("Saved Successfully")
            return 1
        }
    ).catch((err)=>{
    console.log("Some problem while writing data to DB");
    return 0}
    )
}

export { findOrgByUniqueName, saveOrg }