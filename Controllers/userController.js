const UserModel = require("../models/UserSchema");

const SignUp = async (req, res) => {
  const { firstName, lastName, Email, Password } = req.body;
  if (!firstName || !lastName || !Email || !Password) {
    return res.status(400).send({ message: "All fields are required" });
  }

  try {
    const checkUser = await UserModel.findOne({ Email });
    if (checkUser) {
      return res.status(400).send({
        message: "Account Alredy exists, Try logging in to your account",
      });
    }

    const createUser = await UserModel.create({
      firstName,
      lastName,
      Email,
      Password,
    });

    if (createUser) {
      res.status(200).send({ message: "Account Created Successfully" });
    } else {
      res.status(400).send({ message: "Error Creating  Account" });
    }
  } catch (error) {
    console.log("Error saving User Info :", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = { SignUp };
