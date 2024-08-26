let express = require("express");

let app = express();

// Question 1: Check if the number is a whole number
app.get("/check-whole-number", (req, res) => {
  let number = parseFloat(req.query.number);
  let result = Number.isInteger(number) ? "Number is whole number" : "Number is not whole";

  res.send(result);
});

// Question 2: Check if two numbers are equal
app.get("/check-equal", (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);
  let result = (num1 === num2) ? "Numbers are equal" : "Numbers are not equal";

  res.send(result);
});

// Question 3: Check if the user is active
app.get("/check-active", (req, res) => {
  let isActive = req.query.isActive === 'true';
  let result = isActive ? "User is Active" : "User is not Active";

  res.send(result);
});

// Question 4: Check if the user is eligible for a discount
app.get("/check-discount", (req, res) => {
  let cost = parseFloat(req.query.cost);
  let result = cost > 1000 ? "User is eligible for a discount" : "User is not eligible for a discount";

  res.send(result);
});

// Question 5: Check work experience
app.get("/check-experience", (req, res) => {
  let workExperience = parseFloat(req.query.workExperience);
  let result;

  if (workExperience > 0) {
    result = "Person is experienced";
  } else if (workExperience < 0) {
    result = "Person is non-working";
  } else {
    result = "Person is fresher";
  }

  res.send(result);
});

// Question 6: Check grade based on result
app.get("/check-result", (req, res) => {
  let result = parseFloat(req.query.result);
  let grade;

  if (result > 80) {
    grade = "The grade is A";
  } else if (result >= 50 && result <= 80) {
    grade = "The grade is B";
  } else {
    grade = "The grade is Fail";
  }

  res.send(grade);
});

// Question 7: Check attendance level
app.get("/check-attendance", (req, res) => {
  let attendance = parseFloat(req.query.attendance);
  let result;

  if (attendance < 50) {
    result = "Attendance is low";
  } else if (attendance < 90) {
    result = "Attendance is moderate";
  } else {
    result = "Attendance is high";
  }

  res.send(result);
});

// Question 8: Check restaurant rating
app.get("/check-rating", (req, res) => {
  let stars = parseFloat(req.query.stars);
  let result;

  if (stars < 3) {
    result = "Restaurant rating is low";
  } else if (stars <= 4) {
    result = "Restaurant rating is moderate";
  } else {
    result = "Restaurant rating is high";
  }

  res.send(result);
});

let PORT = 3000;
app.listen(PORT, () => console.log("Server is running on port", PORT));
