// QA Security Engineering Lab - Sample Application
// This file intentionally contains insecure patterns for static analysis study purposes.

const fs = require("fs");

// Simulated user database
const users = [
  { id: 1, username: "admin", password: "123456" },
  { id: 2, username: "qa_user", password: "password" }
];

// ❌ Insecure authentication (plain text password comparison)
function login(username, password) {
  console.log("Attempting login for:", username);

  const user = users.find(u => u.username === username);

  if (!user) {
    console.log("User not found");
    return false;
  }

  if (user.password === password) {
    console.log("Login successful");
    return true;
  }

  console.log("Invalid credentials");
  return false;
}

// ❌ Simulated SQL Injection vulnerability pattern
function searchUser(query) {
  const sql = "SELECT * FROM users WHERE username = '" + query + "'";
  console.log("Executing query:", sql);
  return sql;
}

// ❌ Sensitive information exposure in logs
function generateReport() {
  console.log("Generating security report...");
  console.log("Database password: root123");
}

// ❌ Unsafe file read operation (path injection simulation)
function loadConfig(path) {
  const data = fs.readFileSync(path, "utf8");
  console.log("Config loaded:", data);
}

// ❌ Dynamic code execution vulnerability (Code Injection)
function runDynamicCode(input) {
  return eval(input);
}

// ===== Execution Simulation =====
login("admin", "123456");
searchUser("admin' OR '1'='1");
generateReport();

// simulate unsafe dynamic execution
const userInput = process.argv[2] || "console.log('no input')";
runDynamicCode(userInput);