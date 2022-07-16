import express from 'express';
import {findOrgByUniqueName, saveOrg} from '../models/orgModels.js';
const router = express.Router()


router.post("/registerOrg", (req,res)=>
{
    const recievedData = req.body;
    
    if (findOrgByUniqueName(recievedData.orgUniqueName)){
        console.log(findOrgByUniqueName(recievedData.orgUniqueName));
        res.status(302).json({"Message":"Organisation already Exists"})
    }
    else{
        if (saveOrg(recievedData)){
            res.status(200).json({"message": "Data saved successfully"})
        }
        
    }
        
})

export default router