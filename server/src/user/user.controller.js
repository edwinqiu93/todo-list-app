"use strict";
let UsersService = require("./user.service");

async function registerAccount(req, res, next) {
    const { user } = req.body;
    const { user: { user_id, password }} = req.body;
    const db = req.app.get("db");

    for (const field of ["user_id", "password"]) {
        if (!user[field]) {
            return res.status(400).json(`Please fill in the ${field} field and resubmit.`);
        }
    }

    let passwordError = UsersService.validatePassword(password);

    if (passwordError ) {
        return res.status(400).json(passwordError);
    }

    UsersService.checkIfUserExists(user_id, db)
            .then(user => {
                if (user) {
                    return res.status(400).json(`Username already taken`);
                }

                return UsersService.hashPassword(password)
                    .then(hashedPassword => {
                        let newUser = {
                            user_id,
                            password: hashedPassword
                        }

                        return UsersService.insertUser(newUser, db)
                            .then(insertedUser => {
                                if (!insertedUser) {
                                    return res.status(400).json(`User was not created. Please try again`);
                                }

                                const sub = insertedUser.user_id
                                const payload = { user_id: insertedUser.user_id }

                                res.send({
                                    authToken: UsersService.createJwt(sub, payload)
                                })
                            })
                            .catch(next)  
                    })
                    .catch(next)
            })
            .catch(next)
}

async function login(req, res, next) {
    const { user } = req.body;
    const { user: { user_id, password }} = req.body;
    const db = req.app.get('db');

    const loginUser = { 
      user_id: user_id?.toLowerCase(),
      password
    }

    for (const field of ["user_id", "password"]) {
        if (!loginUser[field]) {
            return res.status(400).json(`Please fill in the ${field} field and resubmit.`);
        }
    }

    UsersService.getUserWithUserName(db, loginUser.user_id)
        .then(dbUser => {
            if (!dbUser) {
                return res.status(400).json(`Incorrect Username or Password`);
            }
  
            return UsersService.comparePasswords(loginUser.password, dbUser.password)
                .then(compareMatch => {
                    if (!compareMatch) {
                        return res.status(400).json(`Incorrect Username or Password`);
                    }
                        
                    const sub = dbUser.user_id
                    const payload = { user_id: dbUser.user_id }

                    res.send({
                        authToken: UsersService.createJwt(sub, payload)
                    })
                })
                .catch(next)
        })
        .catch(next)
}

async function refreshToken(req, res) {
    const sub = req.user.user_id
    const payload = { user_id: req.user.user_id }

    res.send({
        authToken: UsersService.createJwt(sub, payload),
    })
}

module.exports = {
    registerAccount,
    login,
    refreshToken
}

