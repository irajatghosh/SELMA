const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const cors = require("cors");
const app = express();
const port = 9000;
const { uuid } = require("uuidv4");

// setup middleware
app.use(bodyParser.json());
app.use(cors());

//
let auth = [
  {
    id: "a1",
    firstname: "Admin",
    lastname: "Admin",
    username: "Admin",
    password: "Admin",
    role: "admin",
  },
];

// Login Authentication
router.post("/login", (req, res) => {
  const { username, password, role } = req.body;
  const user = auth.find(
    (user) =>
      user.username === username &&
      user.password === password &&
      user.role === role
  );
  res.json({
    status: "OK",
    data: user ? user : null,
  });
});

// Add User
router.post("/addUser", (req, res) => {
  const { firstname, lastname, username, password, role } = req.body;
  if (
    !firstname ||
    firstname.trim().length === 0 ||
    !lastname ||
    lastname.trim().length === 0 ||
    !username ||
    username.trim().length === 0 ||
    !password ||
    password <= 0
  ) {
    return res.status(422).json({
      message: "Invalid input, please enter a valid title and price.",
    });
  }
  const user = auth.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    return res.status(422).json({
      message: "User already exists",
    });
  }

  const createdUser = {
    id: uuid(),
    firstname,
    lastname,
    username,
    password,
    role,
  };

  auth.push(createdUser);
  res.status(201).json({ message: "Created new user", user: createdUser });
});

//
app.use(router);

//
app.listen(port, () => {
  console.log(`api is ready on http://localhost:${port}`);
});
