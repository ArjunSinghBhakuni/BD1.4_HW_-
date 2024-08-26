const express = require("express");
const app = express();

// Question 1: Welcome message function
function getWelcomeMessage() {
  return "We will now learn functions!";
}

app.get("/welcome", (req, res) => {
  const message = getWelcomeMessage();
  res.send(message);
});

// Question 2: Greeting message function
function getGreetingMessage(username) {
  return `Hey, ${username}! Are you ready to learn functions with us?`;
}

app.get("/greet", (req, res) => {
  const username = req.query.username;
  const message = getGreetingMessage(username);
  res.send(message);
});

// Question 3: Experience message function
function checkYearsOfExp(yearsOfExp) {
  if (yearsOfExp > 0) {
    return "You have some experience with functions. Great!";
  } else {
    return "No worries. You will start writing functions in no time!";
  }
}

app.get("/message", (req, res) => {
  const yearsOfExp = parseInt(req.query.yearsOfExp);
  const message = checkYearsOfExp(yearsOfExp);
  res.send(message);
});

// Question 4: Calculate total hours function
function getTime(days, hours) {
  return days * hours;
}

app.get("/hours", (req, res) => {
  const days = parseInt(req.query.days);
  const hours = parseInt(req.query.hours);
  const totalHours = getTime(days, hours);
  res.send(totalHours.toString());
});

// Question 5: Module completion status function
function getModuleCompletion(username, hasCompleted) {
  if (hasCompleted === "true") {
    return `${username} has completed the modules`;
  } else {
    return `${username} has not completed the modules`;
  }
}

app.get("/module-completion-status", (req, res) => {
  const username = req.query.username;
  const hasCompleted = req.query.hasCompleted;
  const message = getModuleCompletion(username, hasCompleted);
  res.send(message);
});

// Question 6: Personalized greeting function
function getPersonalizedGreeting(city, name) {
  return `Hey, ${name}! What's famous about ${city}?`;
}

app.get("/personalized-greeting", (req, res) => {
  const city = req.query.city;
  const name = req.query.name;
  const message = getPersonalizedGreeting(city, name);
  res.send(message);
});

// Question 7: Calculate age function
function findAge(birthyear) {
  const currentYear = 2024;
  return currentYear - birthyear;
}

app.get("/find-age", (req, res) => {
  const birthyear = parseInt(req.query.birthyear);
  const age = findAge(birthyear);
  res.send(age.toString());
});

// Question 8: Check if time is sufficient function
function findRequiredTime(days, hours) {
  const totalTime = days * hours;
  if (totalTime >= 30) {
    return "The time being dedicated is sufficient for learning functions";
  } else {
    return "The time being dedicated is not sufficient for learning functions";
  }
}

app.get("/is-time-sufficient", (req, res) => {
  const days = parseInt(req.query.days);
  const hours = parseInt(req.query.hours);
  const message = findRequiredTime(days, hours);
  res.send(message);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
