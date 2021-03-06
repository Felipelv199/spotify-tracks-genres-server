"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var spotifyAuth_controllers_1 = require("../controllers/spotify/spotifyAuth.controllers");
var spotifyUsers_controllers_1 = require("../controllers/spotify/spotifyUsers.controllers");
var router = express_1.Router();
router.get('/auth', spotifyAuth_controllers_1.spotifyAuth);
router.post('/token', spotifyAuth_controllers_1.spotifyToken);
router.get('/users/me', spotifyUsers_controllers_1.getUserProfile);
exports.default = router;
