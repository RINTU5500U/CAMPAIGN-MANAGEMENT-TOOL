const express = require("express")
const router = express.Router()

const {createUser, login, updateUser, deleteUser} = require('../controllers/userController')
const {createProject, updateProject, getProjectDetails, deleteProject} = require('../controllers/projectController')
const {createCampaign, updateCampaign, deleteCampaign} = require('../controllers/campaignController')
const {authentication, authorization} = require('../middlewares/auth')
const {userValidation, loginValidation, updateUserValidation, projectValidation, campaignValidation} = require('../middlewares/validation')

router.post('/createUser', userValidation, createUser)
router.post('/login', loginValidation, login)
router.put('/updateUser/:userId', updateUserValidation, authentication, authorization, updateUser)
router.delete('/deleteUser/:userId', authentication, authorization, deleteUser)

router.post('/createProject', authentication, projectValidation, createProject)
router.put('/user/:userId/updateProject/:projectId', authentication, authorization, projectValidation, updateProject)
router.get('/getProjectDetails/:projectId', authentication, getProjectDetails)
router.delete('/user/:userId/deleteProject/:projectId', authentication, authorization, deleteProject)

router.post('/createCampaign/:projectId', authentication, campaignValidation, createCampaign)
router.put('/user/:userId/updateCampaign/:campaignId', authentication, authorization, campaignValidation, updateCampaign)
router.delete('/user/:userId/deleteProject/:campaignId', authentication, authorization, deleteCampaign)

router.all("/*", function (req, res) { 
    return res.status(400).send({ status: false, message: "invalid http request" });
});

module.exports = router