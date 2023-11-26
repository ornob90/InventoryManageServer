const updateUser = require("../../../lib/user/updateUser");
const User = require("../../../models/user");

const addUser = async (req, res) => {
  try {
    const userData = req.body;

    // const user = new User(userData);

    // await user.save();
    console.log("hitted");
    const inserted = await updateUser(
      { email: userData.email },
      {
        $set: {
          ...userData,
        },
      }
    );

    if (!inserted) {
      res.send({ message: "User already exist", insertOne: false });
    }

    res.send({ message: "Inserted successfully!!", insertOne: true });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: "There was a server side error!!" });
  }
};

module.exports = addUser;
