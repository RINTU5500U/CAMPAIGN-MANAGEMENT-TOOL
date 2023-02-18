const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    projectName: {
        type: String,
        // required: true,
        trim: true
    },
    openCost: {
        type: Number,
        default: 5
    },
    targetOpens: {
        type: Number,
        default: 100
    },
    clickCost: {
        type: Number,
        default: 10
    },
    targetClicks: {
        type: Number,
        default: 5
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

module.exports = mongoose.model('Project', projectSchema) 