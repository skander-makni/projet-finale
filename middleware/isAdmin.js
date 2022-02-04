const isAdmin = (req, res, next) => {
  req.user.role === "admin"
    ? next()
    : res.status(400).send({ msg: "you must be admin " });
};

module.exports = isAdmin;
