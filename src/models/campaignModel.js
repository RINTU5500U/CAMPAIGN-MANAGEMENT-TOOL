const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: true
    },
    campaignName: {
        type: String,
        // required: true,
        trim: true
    },
    opens: {
        type: Number,
        default: 0
    },
    clicks: {
        type: Number,
        default: 100
    },
    status: {
        type: String,
        enum: ['Inactive', 'Active'],
        default: 'Active'
    },
    createdAt: { 
        type: String,
        default: new Date().toLocaleString()
    },
    updatedAt: {
        type: String,
        default: null
    },
    inactiveAt: {
        type: String,
        default: null
    }
});

module.exports = mongoose.model('Campaign', campaignSchema)