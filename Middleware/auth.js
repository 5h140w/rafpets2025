const jwt = require("jsonwebtoken");
const usermodel = require("../Models/userModel");

const auth = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    if (!token) {
      res.status(400).send("not authorized ");
    }
    const decodedtoken = jwt.verify(token, process.env.SECRET_KEY);
    const finduser = await user.findOne({ id: decodedtoken.id });
    if (!finduser) {
      res.status(400).send("not authorized ");
    }
    req.user = finduser;

    next();
  } catch (error) {
    res.status(401).send({ error });
  }
};

//export
module.exports = auth;
