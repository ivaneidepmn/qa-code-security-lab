// QA Security Engineering Lab - Sample Application
// This file intentionally contains insecure patterns for static analysis study purposes.

const users = [
  { id: 1, username: "admin", password: "123456" },
  { id: 2, username: "qa_user", password: "password" }
];

// Simulated login function
function login(username, password) {
  console.log("Attempting login for:", username);

  const user = users.find(u => u.username === username);

  if (!user) {
    console.log("User not found");
    return false;
  }

  // ❌ Insecure plain text password comparison
  if (user.password === password) {
    console.log("Login successful");
    return true;
  }

  console.log("Invalid credentials");
  return false;
}

// Simulated data query vulnerable to injection pattern
function searchUser(query) {
  const sql = "SELECT * FROM users WHERE username = '" + query + "'";
  console.log("Executing query:", sql);
  return sql;
}

// Simulated sensitive log exposure
function generateReport() {
  console.log("Generating security report...");
  console.log("Database password: root123"); // ❌ sensitive data exposure
}

// Simulated unsafe file operation
function loadConfig(path) {
  const fs = require("fs");
  const data = fs.readFileSync(path, "utf8");
  console.log("Config loaded:", data);
}

// Execution simulation
login("admin", "123456");
searchUser("admin' OR '1'='1");
generateReport();

