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
  let result = [...employees];

  const {
    department,
    status,
    location,
    employmentType,
    search
  } = req.query;

  if (department) {
    result = result.filter(
      employee =>
        employee.job.department.toLowerCase() ===
        department.toLowerCase()
    );
  }

  if (status) {
    result = result.filter(
      employee =>
        employee.job.status.toLowerCase() ===
        status.toLowerCase()
    );
  }

  if (location) {
    result = result.filter(
      employee =>
        employee.job.location.toLowerCase() ===
        location.toLowerCase()
    );
  }

  if (employmentType) {
    result = result.filter(
      employee =>
        employee.job.employmentType.toLowerCase() ===
        employmentType.toLowerCase()
    );
  }

  if (search) {
    const query = search.toLowerCase();

    result = result.filter(employee => {
      const name = employee.personal.fullName.toLowerCase();
      const email = employee.contact.email.toLowerCase();
      const title = employee.job.title.toLowerCase();
      const dept = employee.job.department.toLowerCase();

      return (
        name.includes(query) ||
        email.includes(query) ||
        title.includes(query) ||
        dept.includes(query)
      );
    });
  }

  res.json({
    success: true,
    count: result.length,
    data: result
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
// GET EMPLOYEE BY EMPLOYEE CODE
// ------------------------------------

app.get("/api/employees/code/:code", (req, res) => {
  const employee = employees.find(
    employee =>
      employee.job.employeeId.toLowerCase() ===
      req.params.code.toLowerCase()
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
// GET DEPARTMENTS
// ------------------------------------

app.get("/api/departments", (req, res) => {
  const departments = [
    ...new Set(
      employees.map(employee => employee.job.department)
    )
  ];

  res.json({
    success: true,
    count: departments.length,
    data: departments
  });
});

// ------------------------------------
// GET LOCATIONS
// ------------------------------------

app.get("/api/locations", (req, res) => {
  const locations = [
    ...new Set(
      employees.map(employee => employee.job.location)
    )
  ];

  res.json({
    success: true,
    count: locations.length,
    data: locations
  });
});

// ------------------------------------
// GET SKILLS
// ------------------------------------

app.get("/api/skills", (req, res) => {
  const skills = [
    ...new Set(
      employees.flatMap(employee =>
        employee.skills.map(skill => skill.name)
      )
    )
  ];

  res.json({
    success: true,
    count: skills.length,
    data: skills
  });
});

// ------------------------------------
// API STATS
// ------------------------------------

app.get("/api/stats", (req, res) => {
  const activeEmployees = employees.filter(
    employee => employee.job.status === "active"
  );

  const departments = [
    ...new Set(
      employees.map(employee => employee.job.department)
    )
  ];

  const locations = [
    ...new Set(
      employees.map(employee => employee.job.location)
    )
  ];

  res.json({
    success: true,
    data: {
      totalEmployees: employees.length,
      activeEmployees: activeEmployees.length,
      departments: departments.length,
      locations: locations.length
    }
  });
});

// ------------------------------------
// HEALTH CHECK
// ------------------------------------

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    status: "ok",
    timestamp: new Date().toISOString()
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

Departments:
http://localhost:${PORT}/api/departments

Locations:
http://localhost:${PORT}/api/locations

Skills:
http://localhost:${PORT}/api/skills

Stats:
http://localhost:${PORT}/api/stats
`);
});