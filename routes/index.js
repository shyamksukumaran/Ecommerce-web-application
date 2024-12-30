const express = require('express')
const router = express.Router() // default import we can use any name in express like (E.Router)
const userRoutes = require('./userRoutes')
const productRoutes = require('./productRoutes')

router.use('/user',userRoutes)
router.use('/product',productRoutes)







 


module.exports =router