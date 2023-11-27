const User = require("../../models/user");

const updateAdminIncome = async (payment) => {
  const admin = await User.findOne({ role: "admin" });
  let updatedIncome = 0;
  if (admin?.income) {
    updatedIncome = admin.income + payment;
  } else {
    updatedIncome = payment;
  }

  const status = await User.updateOne(
    { role: "admin" },
    { income: updatedIncome }
  );

  return status;
};

module.exports = updateAdminIncome;
