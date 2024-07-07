
const fs = require("fs");
const path = require("path");

const usersFilePath = path.join(__dirname, "..", "users.json");
const getUsers = () => {
  try {
    const data = fs.readFileSync(usersFilePath);
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading users.json:", error.message);
    return [];
  }
};

const handleLogin = (req, res) => {
  const { email, pass } = req.body;

  const users = getUsers();

  const user = users.find((user) => user.email === email && user.pass === pass);

  if (user) {
    res.json({
      Success: true,
      Message: "Valid User",
      User: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } else {
    res.status(401).json({
      Success: false,
      Message: "Invalid User",
    });
  }
};

module.exports = {
  handleLogin,
};
