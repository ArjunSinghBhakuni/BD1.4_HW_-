const express = require("express");
const app = express();

// Question 1: Generate GitHub profile URL
function generateProfileUrl(username) {
  return `https://github.com/${username}`;
}

app.get("/github-profile", (req, res) => {
  const username = req.query.username;
  const profileUrl = generateProfileUrl(username);
  res.send(profileUrl);
});

// Question 2: Generate Certificate
function generateCertificate(firstName, lastName, courseName) {
  return `This certification is awarded to ${firstName} ${lastName} for completing the course ${courseName}`;
}

app.get("/certificate", (req, res) => {
  const firstName = req.query.firstName;
  const lastName = req.query.lastName;
  const courseName = req.query.courseName;
  const certificate = generateCertificate(firstName, lastName, courseName);
  res.send(certificate);
});

// Question 3: Calculate Grade in Percentage
function calculateGrade(math, science, english) {
  const totalMarks = math + science + english;
  const gradeInPercentage = Math.floor((totalMarks / 300) * 100);
  return `Your grade in percentage is ${gradeInPercentage}%`;
}

app.get("/grade", (req, res) => {
  const math = parseInt(req.query.maths);
  const science = parseInt(req.query.science);
  const english = parseInt(req.query.english);
  const result = calculateGrade(math, science, english);
  res.send(result);
});

// Question 4: Split Bill
function splitBill(billAmount, numberOfFriends) {
  const splitAmount = billAmount / numberOfFriends;
  return `Result: Each friend owes ₹${splitAmount} against the bill`;
}

app.get("/split-bill", (req, res) => {
  const billAmount = parseFloat(req.query.billAmount);
  const numberOfFriends = parseInt(req.query.numberOfFriends);
  const result = splitBill(billAmount, numberOfFriends);
  res.send(result);
});

// Question 5: Calculate Monthly Salary
function calculateSalary(totalHours, hourlyWage) {
  const monthlySalary = totalHours * hourlyWage;
  return `Result: Your monthly salary is ₹${monthlySalary}`;
}

app.get("/monthly-salary", (req, res) => {
  const totalHours = parseInt(req.query.totalHours);
  const hourlyWage = parseInt(req.query.hourlyWage);
  const result = calculateSalary(totalHours, hourlyWage);
  res.send(result);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
