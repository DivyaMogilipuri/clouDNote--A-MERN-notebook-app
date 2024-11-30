const jwt = require("jsonwebtoken");

const secret_key = "thisisasecretcode";

const fetchUser = async (req, res, next) => {
  const token = req.header("auth-token");
  //   const token = req.cookies["auth-token"];
  //   const token =
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY5OGMyMDE1MmVkMmY0ZjkxOWJkZmFlIn0sImlhdCI6MTcyMTMwMDAwOH0.FjpN5JOodEk5znbtxG0Hjib1BUI_EI4c0hpFovFDuDg";
  //   console.log("auth  is from auth .js", token);
  if (!token) {
    return res.status(400).json({ error: "No token, authorization denied" });
  }
  if (!token) {
    res.status(400);
  }
  console.log(token);
  try {
    console.log("fetch user");

    const data = jwt.verify(token, secret_key);
    console.log("fetch user data", data);

    req.user = data.user;

    next();
  } catch (error) {
    res.json({ error: error.message });
  }
};
module.exports = fetchUser;
