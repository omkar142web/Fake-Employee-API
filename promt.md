# Fake Employee API

## Project structure

```text
fake-employee-api/
├── package.json
├── server.js
├── data/
│   └── employees.js
└── public/
    └── index.html
```

## 1. `package.json`

```json
{
  "name": "fake-employee-api",
  "version": "1.0.0",
  "description": "Fake Employee API for frontend development",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "node --watch server.js"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^5.1.0"
  }
}
```

## 2. `data/employees.js`

```javascript
const employees = [
  {
    id: 1,

    personal: {
      firstName: "Aarav",
      lastName: "Sharma",
      fullName: "Aarav Sharma",
      displayName: "Aarav",
      gender: "male",
      dateOfBirth: "1994-05-18",
      age: 32,
      nationality: "Indian",
      maritalStatus: "single",
      profileImage: "https://i.pravatar.cc/300?img=11"
    },

    job: {
      employeeId: "EMP-1001",
      employeeCode: "DEV-001",
      title: "Senior Frontend Developer",
      department: "Engineering",
      team: "Web Platform",
      employmentType: "full-time",
      status: "active",
      level: "senior",
      managerId: 5,
      managerName: "Priya Mehta",
      location: "Mumbai",
      workMode: "hybrid",
      joiningDate: "2020-08-10",
      yearsAtCompany: 6,
      shift: "09:00 - 18:00"
    },

    contact: {
      email: "aarav.sharma@example.com",
      workEmail: "aarav.sharma@company.test",
      phone: "+91 98765 43210",
      alternatePhone: "+91 91234 56789"
    },

    address: {
      addressLine1: "42 Marine View Apartments",
      addressLine2: "Andheri West",
      city: "Mumbai",
      state: "Maharashtra",
      country: "India",
      postalCode: "400053",
      timezone: "Asia/Kolkata"
    },

    socials: {
      linkedin: "https://www.linkedin.com/in/aarav-sharma",
      github: "https://github.com/aarav-sharma",
      twitter: "https://twitter.com/aarav_dev",
      instagram: "https://instagram.com/aarav.dev",
      website: "https://aaravsharma.dev"
    },

    skills: [
      {
        name: "JavaScript",
        level: "expert",
        years: 8
      },
      {
        name: "TypeScript",
        level: "expert",
        years: 6
      },
      {
        name: "React",
        level: "expert",
        years: 7
      },
      {
        name: "Node.js",
        level: "advanced",
        years: 5
      },
      {
        name: "CSS",
        level: "expert",
        years: 8
      }
    ],

    education: [
      {
        degree: "Bachelor of Engineering",
        field: "Computer Science",
        institution: "University of Mumbai",
        startYear: 2012,
        endYear: 2016,
        grade: "8.7 CGPA"
      }
    ],

    compensation: {
      currency: "INR",
      annualSalary: 2800000,
      monthlySalary: 233333,
      bonusEligible: true,
      bonusPercentage: 12,
      payFrequency: "monthly"
    },

    emergencyContact: {
      name: "Rohan Sharma",
      relationship: "Brother",
      phone: "+91 99887 77665",
      email: "rohan.sharma@example.com"
    },

    benefits: {
      healthInsurance: true,
      dentalInsurance: true,
      lifeInsurance: true,
      paidTimeOff: 24,
      sickLeave: 12,
      remoteWork: true,
      gymMembership: true,
      mealAllowance: true
    },

    preferences: {
      preferredLanguage: "English",
      preferredContactMethod: "email",
      notifications: true
    },

    metadata: {
      createdAt: "2020-08-10T09:00:00Z",
      updatedAt: "2026-08-01T12:30:00Z",
      lastLogin: "2026-08-15T07:42:00Z"
    }
  },

  {
    id: 2,

    personal: {
      firstName: "Priya",
      lastName: "Mehta",
      fullName: "Priya Mehta",
      displayName: "Priya",
      gender: "female",
      dateOfBirth: "1990-11-02",
      age: 35,
      nationality: "Indian",
      maritalStatus: "married",
      profileImage: "https://i.pravatar.cc/300?img=47"
    },

    job: {
      employeeId: "EMP-1002",
      employeeCode: "PM-002",
      title: "Engineering Manager",
      department: "Engineering",
      team: "Web Platform",
      employmentType: "full-time",
      status: "active",
      level: "manager",
      managerId: 10,
      managerName: "Rahul Kapoor",
      location: "Mumbai",
      workMode: "hybrid",
      joiningDate: "2018-03-12",
      yearsAtCompany: 8,
      shift: "09:00 - 18:00"
    },

    contact: {
      email: "priya.mehta@example.com",
      workEmail: "priya.mehta@company.test",
      phone: "+91 99887 66554",
      alternatePhone: "+91 91111 22222"
    },

    address: {
      addressLine1: "12 Green Park",
      addressLine2: "Powai",
      city: "Mumbai",
      state: "Maharashtra",
      country: "India",
      postalCode: "400076",
      timezone: "Asia/Kolkata"
    },

    socials: {
      linkedin: "https://www.linkedin.com/in/priya-mehta",
      github: "https://github.com/priya-mehta",
      twitter: "https://twitter.com/priya_engineer",
      instagram: null,
      website: "https://priyamehta.dev"
    },

    skills: [
      {
        name: "JavaScript",
        level: "expert",
        years: 12
      },
      {
        name: "React",
        level: "advanced",
        years: 8
      },
      {
        name: "Node.js",
        level: "advanced",
        years: 7
      },
      {
        name: "Leadership",
        level: "expert",
        years: 8
      },
      {
        name: "Project Management",
        level: "expert",
        years: 8
      }
    ],

    education: [
      {
        degree: "Master of Computer Applications",
        field: "Computer Science",
        institution: "University of Pune",
        startYear: 2009,
        endYear: 2012,
        grade: "9.1 CGPA"
      }
    ],

    compensation: {
      currency: "INR",
      annualSalary: 4200000,
      monthlySalary: 350000,
      bonusEligible: true,
      bonusPercentage: 20,
      payFrequency: "monthly"
    },

    emergencyContact: {
      name: "Arjun Mehta",
      relationship: "Husband",
      phone: "+91 98765 11111",
      email: "arjun.mehta@example.com"
    },

    benefits: {
      healthInsurance: true,
      dentalInsurance: true,
      lifeInsurance: true,
      paidTimeOff: 28,
      sickLeave: 15,
      remoteWork: true,
      gymMembership: true,
      mealAllowance: true
    },

    preferences: {
      preferredLanguage: "English",
      preferredContactMethod: "email",
      notifications: true
    },

    metadata: {
      createdAt: "2018-03-12T09:00:00Z",
      updatedAt: "2026-08-05T10:15:00Z",
      lastLogin: "2026-08-15T06:30:00Z"
    }
  },

  {
    id: 3,

    personal: {
      firstName: "Rohan",
      lastName: "Patel",
      fullName: "Rohan Patel",
      displayName: "Rohan",
      gender: "male",
      dateOfBirth: "1997-01-24",
      age: 29,
      nationality: "Indian",
      maritalStatus: "single",
      profileImage: "https://i.pravatar.cc/300?img=12"
    },

    job: {
      employeeId: "EMP-1003",
      employeeCode: "DES-003",
      title: "Product Designer",
      department: "Design",
      team: "Product Design",
      employmentType: "full-time",
      status: "active",
      level: "mid",
      managerId: 7,
      managerName: "Neha Singh",
      location: "Bengaluru",
      workMode: "remote",
      joiningDate: "2022-06-20",
      yearsAtCompany: 4,
      shift: "10:00 - 19:00"
    },

    contact: {
      email: "rohan.patel@example.com",
      workEmail: "rohan.patel@company.test",
      phone: "+91 98760 12345",
      alternatePhone: null
    },

    address: {
      addressLine1: "88 Residency Road",
      addressLine2: "Indiranagar",
      city: "Bengaluru",
      state: "Karnataka",
      country: "India",
      postalCode: "560038",
      timezone: "Asia/Kolkata"
    },

    socials: {
      linkedin: "https://www.linkedin.com/in/rohan-patel",
      github: "https://github.com/rohan-patel",
      twitter: "https://twitter.com/rohan_design",
      instagram: "https://instagram.com/rohan.design",
      website: "https://rohanpatel.design"
    },

    skills: [
      {
        name: "Figma",
        level: "expert",
        years: 7
      },
      {
        name: "UI Design",
        level: "expert",
        years: 7
      },
      {
        name: "UX Research",
        level: "advanced",
        years: 5
      },
      {
        name: "Prototyping",
        level: "expert",
        years: 6
      }
    ],

    education: [
      {
        degree: "Bachelor of Design",
        field: "Interaction Design",
        institution: "National Institute of Design",
        startYear: 2015,
        endYear: 2019,
        grade: "8.9 CGPA"
      }
    ],

    compensation: {
      currency: "INR",
      annualSalary: 2100000,
      monthlySalary: 175000,
      bonusEligible: true,
      bonusPercentage: 10,
      payFrequency: "monthly"
    },

    emergencyContact: {
      name: "Kavya Patel",
      relationship: "Sister",
      phone: "+91 99887 33322",
      email: "kavya.patel@example.com"
    },

    benefits: {
      healthInsurance: true,
      dentalInsurance: true,
      lifeInsurance: true,
      paidTimeOff: 24,
      sickLeave: 12,
      remoteWork: true,
      gymMembership: false,
      mealAllowance: true
    },

    preferences: {
      preferredLanguage: "English",
      preferredContactMethod: "phone",
      notifications: true
    },

    metadata: {
      createdAt: "2022-06-20T09:00:00Z",
      updatedAt: "2026-08-10T14:00:00Z",
      lastLogin: "2026-08-14T17:20:00Z"
    }
  },

  {
    id: 4,

    personal: {
      firstName: "Emily",
      lastName: "Johnson",
      fullName: "Emily Johnson",
      displayName: "Emily",
      gender: "female",
      dateOfBirth: "1995-09-14",
      age: 30,
      nationality: "American",
      maritalStatus: "single",
      profileImage: "https://i.pravatar.cc/300?img=44"
    },

    job: {
      employeeId: "EMP-1004",
      employeeCode: "MKT-004",
      title: "Marketing Specialist",
      department: "Marketing",
      team: "Growth",
      employmentType: "full-time",
      status: "active",
      level: "mid",
      managerId: 8,
      managerName: "Daniel Brown",
      location: "New York",
      workMode: "hybrid",
      joiningDate: "2021-01-18",
      yearsAtCompany: 5,
      shift: "08:00 - 17:00"
    },

    contact: {
      email: "emily.johnson@example.com",
      workEmail: "emily.johnson@company.test",
      phone: "+1 212 555 0198",
      alternatePhone: null
    },

    address: {
      addressLine1: "245 Madison Avenue",
      addressLine2: "Apt 8B",
      city: "New York",
      state: "New York",
      country: "United States",
      postalCode: "10016",
      timezone: "America/New_York"
    },

    socials: {
      linkedin: "https://www.linkedin.com/in/emily-johnson",
      github: null,
      twitter: "https://twitter.com/emily_growth",
      instagram: "https://instagram.com/emily.marketing",
      website: "https://emilyjohnson.marketing"
    },

    skills: [
      {
        name: "SEO",
        level: "expert",
        years: 7
      },
      {
        name: "Content Marketing",
        level: "expert",
        years: 7
      },
      {
        name: "Google Analytics",
        level: "advanced",
        years: 6
      },
      {
        name: "Copywriting",
        level: "advanced",
        years: 8
      }
    ],

    education: [
      {
        degree: "Bachelor of Arts",
        field: "Marketing",
        institution: "New York University",
        startYear: 2013,
        endYear: 2017,
        grade: "3.8 GPA"
      }
    ],

    compensation: {
      currency: "USD",
      annualSalary: 92000,
      monthlySalary: 7666,
      bonusEligible: true,
      bonusPercentage: 15,
      payFrequency: "monthly"
    },

    emergencyContact: {
      name: "Michael Johnson",
      relationship: "Father",
      phone: "+1 212 555 0187",
      email: "michael.johnson@example.com"
    },

    benefits: {
      healthInsurance: true,
      dentalInsurance: true,
      lifeInsurance: true,
      paidTimeOff: 20,
      sickLeave: 10,
      remoteWork: true,
      gymMembership: true,
      mealAllowance: false
    },

    preferences: {
      preferredLanguage: "English",
      preferredContactMethod: "email",
      notifications: true
    },

    metadata: {
      createdAt: "2021-01-18T09:00:00Z",
      updatedAt: "2026-08-01T11:00:00Z",
      lastLogin: "2026-08-15T08:15:00Z"
    }
  },

  {
    id: 5,

    personal: {
      firstName: "Daniel",
      lastName: "Brown",
      fullName: "Daniel Brown",
      displayName: "Daniel",
      gender: "male",
      dateOfBirth: "1988-03-09",
      age: 38,
      nationality: "British",
      maritalStatus: "married",
      profileImage: "https://i.pravatar.cc/300?img=13"
    },

    job: {
      employeeId: "EMP-1005",
      employeeCode: "SAL-005",
      title: "Sales Director",
      department: "Sales",
      team: "Enterprise Sales",
      employmentType: "full-time",
      status: "active",
      level: "director",
      managerId: 10,
      managerName: "Rahul Kapoor",
      location: "London",
      workMode: "office",
      joiningDate: "2016-09-01",
      yearsAtCompany: 10,
      shift: "08:30 - 17:30"
    },

    contact: {
      email: "daniel.brown@example.com",
      workEmail: "daniel.brown@company.test",
      phone: "+44 20 7946 0958",
      alternatePhone: "+44 7700 900123"
    },

    address: {
      addressLine1: "17 King Street",
      addressLine2: "Westminster",
      city: "London",
      state: "England",
      country: "United Kingdom",
      postalCode: "SW1A 1AA",
      timezone: "Europe/London"
    },

    socials: {
      linkedin: "https://www.linkedin.com/in/daniel-brown",
      github: null,
      twitter: "https://twitter.com/daniel_sales",
      instagram: null,
      website: null
    },

    skills: [
      {
        name: "Sales",
        level: "expert",
        years: 16
      },
      {
        name: "Negotiation",
        level: "expert",
        years: 14
      },
      {
        name: "Business Development",
        level: "expert",
        years: 15
      },
      {
        name: "Leadership",
        level: "expert",
        years: 10
      }
    ],

    education: [
      {
        degree: "Bachelor of Business Administration",
        field: "Business",
        institution: "University of London",
        startYear: 2004,
        endYear: 2008,
        grade: "First Class"
      }
    ],

    compensation: {
      currency: "GBP",
      annualSalary: 135000,
      monthlySalary: 11250,
      bonusEligible: true,
      bonusPercentage: 30,
      payFrequency: "monthly"
    },

    emergencyContact: {
      name: "Sarah Brown",
      relationship: "Wife",
      phone: "+44 7700 900456",
      email: "sarah.brown@example.com"
    },

    benefits: {
      healthInsurance: true,
      dentalInsurance: true,
      lifeInsurance: true,
      paidTimeOff: 30,
      sickLeave: 15,
      remoteWork: false,
      gymMembership: true,
      mealAllowance: true
    },

    preferences: {
      preferredLanguage: "English",
      preferredContactMethod: "phone",
      notifications: true
    },

    metadata: {
      createdAt: "2016-09-01T09:00:00Z",
      updatedAt: "2026-08-12T09:45:00Z",
      lastLogin: "2026-08-15T08:00:00Z"
    }
  }
];

module.exports = employees;
```

## 3. `server.js`

```javascript
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
```

## 4. `public/index.html`

This is a simple HTML page showing how you can consume the API directly.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />

  <title>Employees</title>

  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 1100px;
      margin: 40px auto;
      padding: 20px;
    }

    .employee {
      display: flex;
      gap: 20px;
      padding: 20px;
      margin-bottom: 15px;
      border: 1px solid #ddd;
      border-radius: 10px;
    }

    .employee img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      object-fit: cover;
    }

    .employee h2 {
      margin: 0 0 5px;
    }

    .employee p {
      margin: 5px 0;
    }

    .socials a {
      margin-right: 10px;
    }
  </style>
</head>

<body>

  <h1>Employees</h1>

  <div id="employees"></div>

  <script>
    async function loadEmployees() {
      const response = await fetch(
        "http://localhost:3000/api/employees"
      );

      const result = await response.json();

      const container =
        document.getElementById("employees");

      container.innerHTML = result.data
        .map(employee => `
          <div class="employee">

            <img
              src="${employee.personal.profileImage}"
              alt="${employee.personal.fullName}"
            />

            <div>
              <h2>
                ${employee.personal.fullName}
              </h2>

              <p>
                <strong>
                  ${employee.job.title}
                </strong>
              </p>

              <p>
                ${employee.job.department}
                ·
                ${employee.job.location}
              </p>

              <p>
                ${employee.contact.email}
              </p>

              <p>
                ${employee.contact.phone}
              </p>

              <div class="socials">
                ${
                  employee.socials.linkedin
                    ? `<a href="${employee.socials.linkedin}" target="_blank">LinkedIn</a>`
                    : ""
                }

                ${
                  employee.socials.github
                    ? `<a href="${employee.socials.github}" target="_blank">GitHub</a>`
                    : ""
                }

                ${
                  employee.socials.twitter
                    ? `<a href="${employee.socials.twitter}" target="_blank">Twitter</a>`
                    : ""
                }

                ${
                  employee.socials.website
                    ? `<a href="${employee.socials.website}" target="_blank">Website</a>`
                    : ""
                }
              </div>
            </div>

          </div>
        `)
        .join("");
    }

    loadEmployees();
  </script>

</body>
</html>
```

## 5. Install and run

Create the folders/files above, then run:

```bash
npm install
```

Then:

```bash
npm start
```

Open:

```text
http://localhost:3000
```

Or directly use the API from any HTML/JavaScript application:

```javascript
const response = await fetch(
  "http://localhost:3000/api/employees"
);

const result = await response.json();

console.log(result.data);
```

## Available API endpoints

```text
GET /api/employees
GET /api/employees/:id
GET /api/employees/code/:code

GET /api/departments
GET /api/locations
GET /api/skills
GET /api/stats
GET /api/health
```

## Filtering and searching

Search employees:

```text
GET /api/employees?search=aarav
```

Filter by department:

```text
GET /api/employees?department=Engineering
```

Filter by location:

```text
GET /api/employees?location=Mumbai
```

Filter by status:

```text
GET /api/employees?status=active
```

Combine filters:

```text
GET /api/employees?department=Engineering&location=Mumbai
```

You can therefore use this as a small **fake backend for frontend development** without needing a real database.
