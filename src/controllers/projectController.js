const projectModel = require('../models/projectModel')
const campaignModel = require('../models/campaignModel')

module.exports = {
    createProject : async (req, res) => {
        try {
            let data = req.body
            data['userId'] = req.decodedToken.userId
            let saveData = await projectModel.create(data)
            return res.status(201).send({ status: true, msg: 'Project created successfully', Project: saveData })
        } catch (error) {
            return res.status(500).send({ status: false, msg: error.message })
        }
    },

    // getProjectDetails : async (req, res) => {
    //     try {
    //         let {projectId} = req.params
    //         let {page} = req.query
    //         let findProject = await projectModel.findOne({_id: projectId, status: 'Active'})
    //         let findCampaign = await campaignModel.find({projectId: projectId, status: 'Active' }).skip(5*(page-1 || 3)).limit(5)
    //         let obj = {
    //             ProjectId: findProject._id,
    //             ['Project name']: findProject.projectName,
    //             ['Total campaigns']: findCampaign.length,
    //             ['Total opens required']: findCampaign.
    //         }
    //         return res.status(200).send({ status: true, Project: findCampaign })
    //     } catch (error) {
    //         return res.status(500).send({ status: false, msg: error.message })
    //     }
    // },

    updateProject : async (req, res) => {
        try {
            let data = req.body
            let {userId, projectId} = req.params
            data['userId'] = req.decodedToken.userId
            data['updatedAt'] = new Date().toLocaleString()
            let updateData = await projectModel.findOneAndUpdate({userId: userId, _id: projectId, status: 'Active'}, data, {new: true})
            if (!updateData) {
                return res.status(404).send({ status: false, msg: 'Project not found' })
            }
            return res.status(200).send({ status: true, msg: 'Project updated successfully', Project: updateData })
        } catch (error) {
            return res.status(500).send({ status: false, msg: error.message })
        }
    },

    deleteProject : async (req, res) => {
        try {
            let {userId, projectId} = req.params
            let deleteData = await projectModel.findOneAndUpdate({userId: userId, _id: projectId, status: 'Active'}, {status: 'Inactive', inactiveAt: new Date().toLocaleString()})
            if (!deleteData) {
                return res.status(404).send({ status: false, msg: 'Project not found' })
            }
            return res.status(200).send({ status: true, msg: 'Project deleted successfully' })
        } catch (error) {
            return res.status(500).send({ status: false, msg: error.message })
        }
    }
}