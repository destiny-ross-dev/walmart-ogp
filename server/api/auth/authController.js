const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const merge = require("lodash.merge");


function jwtSignUser(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: ONE_WEEK
  });
}

const register = async (req, res) => {
  const db = req.app.get("db");
  const { username, email, password } = req.body;
  try {
    const user = await db.addUser(username, email, password);
    res.status().json({
      user,
      token: jwtSignUser(user)
    });
  } catch (err) {
    res.status(400).send({
      error: "This email account is already in use."
    });
  }
};

const login = async (req, res) => {
  const db = req.app.get("db");
  const { username, password } = req.body.loginObj;
  //   console.log(username, password)
  //   try {
  try {
    let userObj = await db.auth.getUser(username);
    // console.log(userObj);

    if (!userObj[0]){
        return res.status(403).send({error:"Login Information was incorrect."})
    }

    const isPasswordValid = await argon2.verify(userObj[0].hashpass, password);
    if (!isPasswordValid){
        return res.status(403).send({error:"Login Information was incorrect."})
    }

    // add user info
     
    let userInfo;
    
    if ( userObj[0].user_type === 'customer' ) {
       userInfo = await db.getCustomerInfo(userObj[0].user_id)
    } else {
        userInfo = await db.auth.getEmployeeInfo(userObj[0].user_id)
    }

    // sanitize and combine data
    delete userObj[0].hashpass;
    const userResponse = merge(userInfo[0], userObj[0])

    // Sign Token
    let token = jwtSignUser(userResponse);

    // Create a cookie to send on response
    res.cookie('user', {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7 // 1 year cookie
      })

      // Send response
    res.status(200).json({
        user:userResponse,
        token
    })

  } catch (e) {
    console.log(e);
  }
};

module.exports = { login, register };
