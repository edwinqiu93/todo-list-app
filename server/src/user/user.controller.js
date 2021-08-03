"use strict";
let UsersService = require("./user.service");

async function registerAccount(req, res) {
    const { user } = req.body;
    const { user: { user_id, password }} = req.body;
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
                                res
                                    .status(201)
                                    .location(path.posix.join(req.originalUrl, `/${insertedUser.id}`))
                                    .json(UsersService.serializeUser(insertedUser))
                            })  
                    })
            })
}

module.exports = {
    registerAccount
}
