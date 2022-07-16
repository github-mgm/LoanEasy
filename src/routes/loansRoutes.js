import express from 'express';
import {findOrgByUniqueName,saveOrg} from '../models/orgModels.js';
const router = express.Router()


router.get('/all_loans', (req, res)=>{
    
 res.send("endpoint under development")
})


export default router
