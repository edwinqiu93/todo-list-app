const agent = require("./agent");
import TokenService from "../services/token-service";
import IdleService from "../services/idle-service";

async function registerAccount(user) {
    return agent
        .get()
        .post("/api/user/register", { user })
        .then(resp => resp.data);
}

async function login(user) {
    return agent
        .get()
        .post("/api/user/login", { user })
        .then(resp => resp.data)
}

async function postRefreshToken() {
    let respJson = await agent
        .get()
        .post("/api/user/refresh")
        .then(resp => resp.data)

    TokenService.saveAuthToken(respJson.authToken);
    TokenService.queueCallbackBeforeExpiry(async () => {
        await this.postRefreshToken();
    })
    
    return respJson;
}

module.exports = {
    registerAccount,
    login,
    postRefreshToken
}