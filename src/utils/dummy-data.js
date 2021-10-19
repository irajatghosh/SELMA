export const USERS = [
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
    username: "p1@test.com",
    password: "test123",
    role: "Professor",
  },
  {
    id: "p2",
    firstname: "Lucas",
    lastname: "Müller",
    username: "p2@test.com",
    password: "test123",
    role: "Professor",
  },
  {
    id: "s1",
    firstname: "Mark",
    lastname: "Müller",
    username: "s1@test.com",
    password: "test123",
    role: "Student",
  },
  {
    id: "s2",
    firstname: "Lucas",
    lastname: "Fischer",
    username: "s2@test.com",
    password: "test123",
    role: "Student",
  },
];

export const EXAMS = [
  {
    id: "e1",
    subject: "Java programming",
    date: "30/10/2021",
    time: "10:00",
    professor: "p1",
    participants: ["s1", "s2"],
  },
  {
    id: "e1",
    subject: "Python",
    date: "10/11/2021",
    time: "10:00",
    professor: "p2",
    participants: ["s1"],
  },
];
