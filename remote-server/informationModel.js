const mongoose = require('mongoose');
// Setup schema
const informationSchema = mongoose.Schema({
    package: {
        type: String,
        // required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

// Export Information model
const Information = module.exports = mongoose.model('information', informationSchema);
module.exports.get = function (callback, limit) {
    Information.find(callback).limit(limit);
}
