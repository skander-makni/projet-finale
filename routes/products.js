const express = require("express");
const {
  addProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/product");
const isAdmin = require("../middleware/isAdmin");
const isAuth = require("../middleware/isAuth");

const router = express.Router();

router.post("/", isAuth,isAdmin,addProduct);

router.get("/", getProducts);

router.get("/:id", getProduct);

router.delete("/:id",isAuth,isAdmin, deleteProduct);

router.put("/:id", isAuth,isAdmin,updateProduct);

module.exports = router;
