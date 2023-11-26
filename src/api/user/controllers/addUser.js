const updateUser = require("../../../lib/user/updateUser");
const User = require("../../../models/user");

const addUser = async (req, res) => {
  try {
    console.log("Hit backend add user");
    const userData = req.body;

    const userExist = await User.findOne({ email: userData.email });

    if (userExist) {
      res.send({ message: "User already exist", insertOne: false });
    } else {
      const user = new User({ ...userData, role: "user" });
      await user.save();

      res.send({ message: "Inserted successfully!!", insertOne: true });
    }

    // console.log("hitted");
    // const inserted = await updateUser(
    //   { email: userData.email },
    //   {
    //     $set: {
    //       ...userData,
    //       role: "user",
    //     },
    //   }
    // );
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: "There was a server side error!!" });
  }
};

module.exports = addUser;
