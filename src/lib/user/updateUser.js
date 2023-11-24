const User = require("../../models/user");

const updateUser = async (query, newData) => {
  try {
    console.log("Here...");
    const result = await User.updateOne(query, newData);
    console.log(result);
    return result.modifiedCount > 0;
  } catch (error) {
    return error;
  }
};

module.exports = updateUser;
