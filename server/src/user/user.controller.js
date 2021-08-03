"use strict";
let UsersService = require("./user.service");
const path = require('path');

async function registerAccount(req, res) {
    const { user } = req.body;
    const { user: { user_id, password }} = req.body;
    const db = req.app.get("db");
    console.log("user", user);

    for (let field in user) {
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
                console.log("user", user);
                if (user) {
                    return res.status(400).json(`Username already taken`);
                }
                return UsersService.hashPassword(password)
                    .then(hashedPassword => {
                        console.log("hashed", hashedPassword);
                        let newUser = {
                            user_id,
                            password: hashedPassword
                        }
                        return UsersService.insertUser(newUser, db)
                            .then(insertedUser => {
                                console.log("inserted user", insertedUser);
                                res
                                    .status(201)
                                    .location(path.posix.join(req.originalUrl, `/${insertedUser.id}`))
                                    .json(UsersService.serializeUser(insertedUser))
                            })  
                    })
            })
}

async function login(req, res) {
    const { user } = req.body;
    const { user: { user_id, password }} = req.body;
    const db = req.app.get('db')
    const loginUser = { 
      user_id: user_id.toLowerCase(),
      password
    }

    for (let field in user) {
        if (!user[field]) {
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
        })
        .catch(next)
}

module.exports = {
    registerAccount,
    login
}

