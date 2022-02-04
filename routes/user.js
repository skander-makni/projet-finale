const express = require("express");

const {
  loginValidator,
  registerValidator,
  validations,
} = require("../middleware/acteurValidator");

const {
  getusers,
  adduser,
  getOneUser,
  deleteUser,
  updateUser,
  register,
  login,
  currentActeur,
  currentUser,
} = require("../controllers/user");
const isAuth = require("../middleware/isAuth");

const router = express.Router();

router.get("/", getusers);

// router.post("/", adduser);

// router.get("/:_id", getOneUser);
// router.delete("/:_id", deleteUser);
// router.put("/:_id", updateUser);

router.post("/register", registerValidator(), validations, register);

router.post("/login", loginValidator(), validations, login);
router.get("/current", isAuth, currentUser);

module.exports = router;
