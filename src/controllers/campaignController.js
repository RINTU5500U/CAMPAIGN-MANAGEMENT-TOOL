const campaignModel = require('../models/campaignModel')

module.exports = {
    createCampaign : async (req, res) => {
        try {
            let data = req.body
            data['userId'] = req.decodedToken.userId
            data['projectId'] = req.params.projectId
            let saveData = await campaignModel.create(data)
            return res.status(201).send({ status: true, msg: 'Campaign created successfully', Campaign: saveData })
        } catch (error) {
            return res.status(500).send({ status: false, msg: error.message })
        }
    },
    
    updateCampaign : async (req, res) => {
        try {
            let data = req.body
            let {userId, campaignId} = req.params
            data['userId'] = req.decodedToken.userId
            data['updatedAt'] = new Date().toLocaleString()
            let updateData = await campaignModel.findOneAndUpdate({userId: userId, _id: campaignId, status: 'Active'}, data, {new: true})
            if (!updateData) {
                return res.status(404).send({ status: false, msg: 'Campaign not found' })
            }
            return res.status(200).send({ status: true, msg: 'Campaign updated successfully', Campaign: updateData })
        } catch (error) {
            return res.status(500).send({ status: false, msg: error.message })
        }
    },

    deleteCampaign : async (req, res) => {
        try {
            let {userId, campaignId} = req.params
            let deleteData = await campaignModel.findOneAndUpdate({userId: userId, _id: campaignId, status: 'Active'}, {status: 'Inactive', inactiveAt: new Date().toLocaleString()})
            if (!deleteData) {
                return res.status(404).send({ status: false, msg: 'Campaign not found' })
            }
            return res.status(200).send({ status: true, msg: 'Campaign deleted successfully' })
        } catch (error) {
            return res.status(500).send({ status: false, msg: error.message })
        }
    }
}