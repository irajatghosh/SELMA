export const USERS = [
  {
    id: "s1",
    firstname: "Mark",
    lastname: "Müller",
    fullname: "Mark Müller",
    username: "s1@test.com",
    password: "test123",
    role: "Student",
  },
  {
    id: "s2",
    firstname: "Lucas",
    lastname: "Fischer",
    fullname: "Lucas Fischer",
    username: "s2@test.com",
    password: "test123",
    role: "Student",
  },
  {
    id: "a1",
    firstname: "Admin",
    lastname: "Admin",
    username: "Admin",
    password: "Admin",
    role: "Admin",
  },
  {
    id: "p1",
    firstname: "Martin",
    lastname: "Thomas",
    fullname: "Martin Thomas",
    username: "p1@test.com",
    password: "test123",
    role: "Professor",
  },
  {
    id: "p2",
    firstname: "Lucas",
    lastname: "George",
    fullname: "Lucas George",
    username: "p2@test.com",
    password: "test123",
    role: "Professor",
  },
];

export const EXAMS = [
  {
    id: "e1",
    subject: "Java programming",
    date: "2021-10-30",
    time: "10:00",
    professor: "p1@test.com",
    professorFullName: "Martin Thomas",
    participants: ["s1", "s2"],
  },
  {
    id: "e2",
    subject: "Python",
    date: "2021-11-10",
    time: "10:00",
    professor: "p2@test.com",
    professorFullName: "Lucas George",
    participants: ["s1"],
  },
  {
    id: "e3",
    subject: "JavaScript",
    date: "2021-11-10",
    time: "10:00",
    professor: "p1@test.com",
    professorFullName: "Martin Thomas",
    participants: ["s1"],
  },
];

export const RESULTS = [];
