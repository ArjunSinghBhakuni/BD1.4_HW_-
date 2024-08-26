let express = require("express");
let app = express();

// Custom Commit Message
app.get("/custom-commit", (req, res) => {
    let type = req.query.type;
    let message = req.query.message;
    let commitMessage = `${type}: ${message}`;
    res.send(commitMessage);
});

// Generate Certificate for Students
app.get("/certificate", (req, res) => {
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    let courseName = req.query.courseName;
    let certificateMessage = `This certification is awarded to ${firstName} ${lastName} for completing the course ${courseName}`;
    res.send(certificateMessage);
});

// Configure a Custom Out-of-Office Message
app.get("/autoreply", (req, res) => {
    let startMonth = req.query.startMonth;
    let endMonth = req.query.endMonth;
    let autoReplyMessage = `Dear customer, thank you for reaching out to me. Unfortunately, I'm out of office from ${startMonth} till ${endMonth}. Your enquiry will be resolved by another colleague.`;
    res.send(autoReplyMessage);
});

// Send a Secure URL
app.get("/secureurl", (req, res) => {
    let domain = req.query.domain;
    let secureUrl = `https://${domain}`;
    res.send(secureUrl);
});

// Send a Verification OTP
app.get("/sendotp", (req, res) => {
    let otpCode = req.query.otpCode;
    let otpMessage = `Your OTP for account verification is ${otpCode}. Do not share this with anyone.`;
    res.send(otpMessage);
});

// Send a Welcome Mail to New User
app.get("/welcome", (req, res) => {
    let firstName = req.query.firstName;
    let email = req.query.email;
    let welcomeMessage = `Hey ${firstName}. We're excited to have you here, we'll send future notifications to your registered mail (${email})`;
    res.send(welcomeMessage);
});

// Generate GitHub Profile URL
app.get("/github-profile", (req, res) => {
    let userName = req.query.userName;
    let githubProfileUrl = `https://github.com/${userName}`;
    res.send(githubProfileUrl);
});

// Convert Text into CSV Row Format
app.get("/text-to-csv", (req, res) => {
    let id = req.query.id;
    let email = req.query.email;
    let rollNumber = req.query.rollNumber;
    let csvRow = `${id}, ${email}, ${rollNumber}`;
    res.send(csvRow);
});

let PORT = 3000;
app.listen(PORT, () => console.log("Server is running on port", PORT));
