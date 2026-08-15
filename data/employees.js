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