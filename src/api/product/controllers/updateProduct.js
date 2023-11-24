const { ObjectId } = require("mongodb");
const Product = require("../../../models/product");

const updateProduct = async (req, res, next) => {
  try {
    const newData = req.body;

    const { id } = req.params;

    const result = await Product.updateOne(
      { _id: new ObjectId(id) },
      { $set: newData }
    );
    console.log(res);

    res.send({
      message: "Updated successfully!",
      updateOne: result.modifiedCount > 0,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateProduct;
