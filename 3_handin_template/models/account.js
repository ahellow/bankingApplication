const mongoose = require('mongoose');

// 3. Finish the account schema
const AccountSchema = new mongoose.Schema({
    /**
     * the schema follows this structure:
     * <fieldName>: {
     *  type: <type>,
     *  required: <bool>
     * },
     * <anotherFieldName>: {
     *  type: <type>,
     *  required: <bool>
     * }, and so on. 
     */

    firstName: {
        type: String,
        required: true,
    }
});

const model = mongoose.model('Account', AccountSchema);

module.exports = model;