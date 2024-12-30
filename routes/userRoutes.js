const express = require('express')
const {userSignup, userLogin} = require('../controllers/userControllers')
const router = express.Router()

router.post('/', async(req,res)=>{ 
    res.send('hello jeffrin')

}
) 
router.post('/login',userLogin) 
router.post('/signup',userSignup)
// router.put('/reset-password',userLogin)
// router.put('/logout',userLgout)
router.get('/profile',userAuth,userPofile)
// router.put('/profile- update',userLogin)
// router.delete('delete-account')


// router.get('/check-user') // auth

  


module.exports = router