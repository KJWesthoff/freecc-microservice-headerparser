const express = require('express')
const router = express.Router();
const config = require('dotenv').config();


console.log(config)

router.get("/whoami", (req,res) => {
    
    console.log(req.headers)
    


    
    
    res.json({
        ipaddress:req.ip,
        language:req.headers['accept-language'],
        software:req.headers['user-agent']})
})

router.get("/who", (req,res) => {
    
    console.log(req.headers)
    


    
    
    res.json({
        headers:req.ip})
})



module.exports = router;