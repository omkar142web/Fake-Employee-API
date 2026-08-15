const express = require("express");
const cors = require("cors");
const path = require("path");

const employees = require("./data/employees");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

// ------------------------------------
// GET ALL EMPLOYEES
// ------------------------------------

app.get("/api/employees", (req, res) => {
  res.json({
    success: true,
    count: employees.length,
    data: employees
  });
});

// ------------------------------------
// GET SINGLE EMPLOYEE
// ------------------------------------

app.get("/api/employees/:id", (req, res) => {
  const id = Number(req.params.id);

  const employee = employees.find(
    employee => employee.id === id
  );

  if (!employee) {
    return res.status(404).json({
      success: false,
      message: "Employee not found"
    });
  }

  res.json({
    success: true,
    data: employee
  });
});

// ------------------------------------
// START SERVER
// ------------------------------------

app.listen(PORT, () => {
  console.log(`
🚀 Fake Employee API running!

API:
http://localhost:${PORT}/api/employees

Single employee:
http://localhost:${PORT}/api/employees/1
`);
});