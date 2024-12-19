const express = require('express')
const router = express.Router();
const db = require('.../db/conn')


router.get('/', async(requestAnimationFrame, res)=>{
    const collection = await db.collection(posts)
    const results = await collection.find({}).limit(5).toArray()
    console.log(results)
})
module.exports = router;