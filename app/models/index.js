const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.user = require("./orders.model");
db.role = require("./tickets.model");
db.user = require("./user.model");
db.role = require("./role.model");
db.refreshToken = require("./refreshToken.model");

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;