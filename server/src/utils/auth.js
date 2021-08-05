const UsersService = require("../user/user.service");

function requireAuth(req, res, next) {
  const authToken = req.get('Authorization') || ''

  let bearerToken;
  if (!authToken.toLowerCase().startsWith('bearer ')) {
    return res.status(401).json(`Missing Bearer Token`);
  } else {
    bearerToken = authToken.slice(7, authToken.length);
  }

  try {
    const payload = UsersService.verifyJwt(bearerToken);
    console.log("requireAuth payload", payload);

    UsersService.getUserWithUserName(
      req.app.get('db'),
      payload.sub,
    )
      .then(user => {
        console.log("AUTH USER", user);
        if (!user)
          return res.status(401).json(`Unauthorized Request`);

        req.user = user;
        next();
      })
      .catch(err => {
        console.error(err);
        next(err);
      })
  } catch(error) {
    res.status(401).json(`Unauthorized Request`);
  }
}

module.exports = requireAuth;
