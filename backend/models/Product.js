var Waterline = require('waterline');

module.exports = Waterline.Collection.extend({
    identity: 'products',
    tableName : 'products',
    connection: 'mysql',

    attributes: {
        id: {
            type: 'integer',
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: 'string',
            required: true
        },
        description: {
            type: 'string',
            required: false
        }
    }
});