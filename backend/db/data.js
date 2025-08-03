const mongo = require('mongoose');

mongo.connect("mongodb+srv://admin:admin123@clusterlearn.9aeov48.mongodb.net/intern");

const demoData = mongo.model('demoData',{
                name: String,
                referral_code: String,
                donation_Amount: String
},
'demoData')

module.exports = {demoData}