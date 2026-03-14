// QA Security Engineering Lab - Sample Application
// This file intentionally contains insecure patterns for static analysis study purposes.

const { exec } = require("child_process");

// Simulated user database
const users = [
  { id: 1, username: "admin", password: "123456" },
  { id: 2, username: "qa_user", password: "password" }
];

// Insecure authentication (plain text password comparison)
function login(username, password) {
  console.log("Attempting login for:", username);

  const user = users.find((u) => u.username === username);

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

// Simulated SQL Injection vulnerability pattern
function searchUser(query) {
  const sql = "SELECT * FROM users WHERE username = '" + query + "'";
  console.log("Executing query:", sql);
  return sql;
}

// Sensitive information exposure in logs
function generateReport() {
  console.log("Generating security report...");
  console.log("Database password: root123");
}

// Command injection simulation
function runSystemCommand(userInput) {
  exec("echo " + userInput, (error, stdout, stderr) => {
    if (error) {
      console.error("Execution error:", error.message);
      return;
    }

    if (stderr) {
      console.error("Standard error:", stderr);
      return;
    }

    console.log("Command output:", stdout);
  });
}

// ===== Execution Simulation =====
login("admin", "123456");
searchUser("admin' OR '1'='1");
generateReport();

const userInput = process.argv[2] || "security-lab-test";
runSystemCommand(userInput);