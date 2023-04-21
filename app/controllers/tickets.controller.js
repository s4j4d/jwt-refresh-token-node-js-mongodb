const config = require("../config/auth.config");
const db = require("../models");
const {redisClient} = require('../config/redis.config')
const { user: User, role: Role, refreshToken: RefreshToken } = db;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Orders = require("../models/orders.model");

exports.getTicket = (req, res) => {

    const query = req.query
    redisClient.hSet()
};