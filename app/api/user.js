const agent = require("./agent");
const TokenService = require("../services/token-service");
const IdleService = require("../services/idle-service");

async function registerAccount(user) {
    console.log("in register");
    return agent
        .get()
        .post("/api/user/register", { user })
        .then(resp => resp.data.data);
}



module.exports = {
    registerAccount
}