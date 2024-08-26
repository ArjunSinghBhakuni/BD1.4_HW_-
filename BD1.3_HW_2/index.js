const express = require("express");
const app = express();

// Question 1: Calculate BMI category
app.get("/check-bmi", (req, res) => {
  let weight = parseFloat(req.query.weight);
  let height = parseFloat(req.query.height);
  let bmi = weight / (height * height);
  let result;

  if (bmi < 18.5) {
    result = "BMI category is underweight";
  } else if (bmi < 24.9) {
    result = "BMI category is normal weight";
  } else if (bmi < 29.9) {
    result = "BMI category is overweight";
  } else {
    result = "BMI category is obese";
  }

  res.send(result);
});

// Question 2: Calculate academic performance based on grade
app.get("/check-performance", (req, res) => {
  let grade = parseFloat(req.query.grade);
  let result;

  if (grade >= 90) {
    result = "Academic performance is excellent";
  } else if (grade >= 75) {
    result = "Academic performance is good";
  } else if (grade >= 50) {
    result = "Academic performance is average";
  } else {
    result = "Academic performance is poor";
  }

  res.send(result);
});

// Question 3: Calculate age group based on age
app.get("/check-age-group", (req, res) => {
  let age = parseFloat(req.query.age);
  let result;

  if (age <= 12) {
    result = "Age group is child";
  } else if (age <= 17) {
    result = "Age group is teenager";
  } else if (age <= 64) {
    result = "Age group is adult";
  } else {
    result = "Age group is senior";
  }

  res.send(result);
});

// Question 4: Calculate loan eligibility based on credit score
app.get("/check-loan-eligibility", (req, res) => {
  let creditScore = parseFloat(req.query.creditScore);
  let result;

  if (creditScore >= 750) {
    result = "Loan eligibility is high";
  } else if (creditScore >= 650) {
    result = "Loan eligibility is medium";
  } else {
    result = "Loan eligibility is low";
  }

  res.send(result);
});

// Question 5: Calculate tax bracket based on income
app.get("/check-tax-bracket", (req, res) => {
  let income = parseFloat(req.query.income);
  let result;

  if (income <= 500000) {
    result = "You fall under the 10% tax bracket";
  } else if (income <= 1000000) {
    result = "You fall under the 15% tax bracket";
  } else if (income <= 1500000) {
    result = "You fall under the 20% tax bracket";
  } else {
    result = "You fall under the 30% tax bracket";
  }

  res.send(result);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
