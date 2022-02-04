const jwt = require("jsonwebtoken");
const User = require("../model/User");

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    if (!token) {
      res.status(401).send({ errors: [{ msg: "you are not authorized" }] });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    // console.log(decoded);

    const usertofind = await User.findOne({ _id: decoded.id });
    if (!usertofind) {
      return res
        .status(401)
        .send({ errors: [{ msg: "you are not authorized!" }] });
    }

    req.user = usertofind;
    next();
  } catch (error) {
    res.status(401).send({ errors: [{ msg: "you are not authorized!!" }] });
  }
};

module.exports = isAuth;
