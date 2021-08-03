const bcrypt = require('bcryptjs')
const xss = require('xss')
const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/
const REGEX_UPPER_LOWER_NUMBER = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[\S]+/;
const jwt = require('jsonwebtoken')
const config = require('../config')

const UsersService = {

    getUserWithUserName(db, user_id) {
        return db('users')
          .where({ user_id })
          .first()
    },

    getAllUsers (db) {
        return db
            .select('*')
            .from('users')
    },

    comparePasswords(password, hash) {
        return bcrypt.compare(password, hash)
    },    
    
    checkIfUserExists(user_id, db) {
        return db('users')
        .where('user_id', user_id)
        .first()
        .then(user => !!user)
    },

    createJwt(sub, payload) {
        return jwt.sign(payload, config.JWT_SECRET, {
          subject: sub,
          expiresIn: config.JWT_EXPIRY,
          algorithm: 'HS256',
        })
    },
    
    verifyJwt(token) {
         return jwt.verify(token, config.JWT_SECRET, {
             algorithms: ['HS256']
         })
    },

    validatePassword (password) {
        if (password.length < 8) {
            return 'Password must be longer than 8 characters';
          }
          if (password.length > 72) {
            return 'Password must be less than 72 characters';
          }
          if (password.startsWith(' ') || password.endsWith(' ')) {
            return 'Password must not start or end with empty spaces';
          }
          if (!REGEX_UPPER_LOWER_NUMBER.test(password)) {
            return 'Password must contain one Upper case, Lower case, and Number';
          }
          return null
    },

    hashPassword (password) {
        return bcrypt.hash(password, 12)
    },

    insertUser (user, db) {
        return db
            .from('users')
            .insert(user)
            .returning('*')
            .then(rows => {
                return rows[0]
            })
    },

    serializeUser (user) {
        return {
            user_id: xss(user.user_id)
        }
    },

    serializeGetAllUser (user) {
        return {
            id: user.id,
            username: xss(user.username),
            first_name: xss(user.first_name),
            last_name: xss(user.last_name),
            country: xss(user.country),
            state: xss(user.state),
            city: xss(user.city),
            email: xss(user.email),
            occupation: xss(user.occupation),
            interests: xss(user.interests),
            image: xss(user.image),
            make_private: user.make_private,
            nothing: xss(user.nothing)
        }
    },

    updateUser (db, user_id, info) {
        return db
            .from('users')
            .where('user_id', user_id)
            .update(info)
            .returning('*')
            .then(rows => {
                return rows[0]
            })
    }
}

module.exports = UsersService