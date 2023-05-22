const mongoose = require('mongoose');

const goalModel = mongoose.Schema(
    {
        text: {
            type: String,
            require: [true, 'Enter Text Here ']
        }
    },
    {
        timeStamps: true
    }
)

module.exports = mongoose.model('goalModel',goalModel);
