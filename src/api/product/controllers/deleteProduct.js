const { ObjectId } = require("mongodb");
const Product = require("../../../models/product");

const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await Product.deleteOne({ _id: new ObjectId(id) });

    res.send({
      message: "Deleted Successfully",
      deleteOne: result.deletedCount > 0,
      status: result.acknowledged,
    });
  } catch (error) {
    console.error(error);

    next(error);
  }
};

module.exports = deleteProduct;
