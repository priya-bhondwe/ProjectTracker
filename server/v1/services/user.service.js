const fs = require("fs");

const getUsers = () => {
  const data = fs.readFileSync("users.json");
  return JSON.parse(data);
};

const userService = {
  getOne(id) {
    return new Promise((resolve, reject) => {
      const user = {
        id,
        name: "Kiran Gosavi",
        email: "kiran.gosavi@techprimelab.com",
      };
      if (user) {
        resolve(user);
      } else {
        reject("User not found");
      }
    });
  },

  authenticateUser(email, Pass) {
    const users = getUsers();
    return users.find((user) => user.email === email && user.Pass === Pass);
  },
};

module.exports = userService;
