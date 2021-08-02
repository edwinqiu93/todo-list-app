"use strict";

async function registerAccount(req, res) {
    const { user } = req.body;
    console.log("user", user);

    let data = user;

    return res.json({ data });
}

module.exports = {
    registerAccount
}