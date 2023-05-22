const mongoose = require('mongoose');

const goalSchema = mongoose.Schema(
    {
        text: {
            type: String,
            require: [true, 'Enter Text Here ']
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Goal',goalSchema);
