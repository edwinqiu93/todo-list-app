const agent = require("./agent");
const TokenService = require("../services/token-service");
const IdleService = require("../services/idle-service");

async function registerAccount(user) {
    return agent
        .get()
        .post("/post", { user })
        .then(resp => resp.data.data);
}



module.exports = {
    registerAccount
}