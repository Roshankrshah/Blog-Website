const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('Starting Blog website building');
});

module.exports = router;