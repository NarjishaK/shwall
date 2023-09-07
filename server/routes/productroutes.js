var express = require("express");
var router = express.Router();
var productController = require("../controller/productcontroller");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
 },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
var upload = multer({ storage: storage });



router.post( "/addproduct",upload.single("image"), productController.productAdd);
router.get("/listproduct",productController.productList)
router.get('/editproductById/:id',productController.editproductById)
router.put('/updateproduct/:id',upload.single("image"),productController.updateproduct)
router.delete('/deleteproduct/:id',productController.deleteproduct)

module.exports = router;
