const User = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.getusers = async (req, res) => {
  try {
    const listofusers = await User.find();
    res.status(200).send({ msg: "this is list of users", listofusers });
  } catch (error) {
    res.status(400).send({ msg: "can not get all users", error });
  }
};

exports.getOneUser = async (req, res) => {
  try {
    const { _id } = req.params;
    const usertofind = await User.findOne({ _id });
    res.status(200).send({ msg: "i find the user", usertofind });
  } catch (error) {
    res.status(400).send({ msg: "can not find", error });
  }
};
exports.deleteUser = async (req, res) => {
  try {
    const { _id } = req.params;
    await User.deleteOne({ _id });
    res.status(200).send({ msg: "user deleted succ" });
  } catch (error) {
    res.status(400).send({ msg: "can not delete", error });
  }
};
exports.updateUser = async (req, res) => {
  try {
    const { _id } = req.params;
    const newUser = req.body;
    await User.updateOne({ _id }, { $set: { ...newUser } });
    res.status(200).send({ msg: "User updated succ" });
  } catch (error) {
    res.status(400).send({ msg: "can not update ", error });
  }
};

/**
 * Register
 */
exports.register = async (req, res) => {
  try {
    const { name, email, password, phone, role } = req.body;
    const usertocheck = await User.findOne({ email });
    if (usertocheck) {
      return res.status(400).send({ errors: [{ msg: "email already exist" }] });
    }
    const newUser = new User({ name, email, password, phone, role });
    console.log(newUser);

    const salt = 10;
    const haschedpassword = await bcrypt.hash(password, salt);

    newUser.password = haschedpassword;

    await newUser.save();
    const token = jwt.sign({ id: newUser._id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    res.status(200).send({ msg: "register succ", user: newUser, token });
  } catch (error) {
    res.status(400).send({ msg: "register fail  " });
  }
};

/**
 * Login
 */
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const usertocheck = await User.findOne({ email });
    if (!usertocheck) {
      return res.status(400).send({ errors: [{ msg: "Bad credentials " }] });
    }
    const isMatch = await bcrypt.compare(password, usertocheck.password);

    if (!isMatch) {
      return res.status(400).send({ errors: [{ msg: "Bad credentials " }] });
    }

    const token = jwt.sign({ id: usertocheck._id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    res.status(200).send({ msg: "login succ", user: usertocheck, token });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "login fail !!" }] });
  }
};

exports.currentUser = (req, res) => {
  res.send(req.user);
};
