// const Connection=require("./db.js")
// const express=require("express")
// const cookieParser = require('cookie-parser');
// const Auth=require("./Routes/auth")
// const Notes=require("./Routes/notes")
// const  app=express()
// var cors = require('cors')
// app.use(cookieParser());
// const allowedOrigins = ['http://localhost:3005','http://localhost:3000']; // Add more origins as needed

// const corsOptions = {
//   origin: (origin, callback) => {
//     // Check if the origin is in the allowed origins list
//     if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   credentials: true, // Access-Control-Allow-Credentials: true
// };
// app.use(cors(corsOptions));

// Connection()

// app.use(express.json())
// app.use("/api/auth",Auth)
// app.use("/api/notes",Notes)
// // app.get("/",(req,res)=>{
// //     res.send("i am fine")
// // })

// app.post("/",(req,res)=>{
//     res.send("Divya")
//     console.log("post request recievved")

//     //console.log(res.json())
// })

// app.listen(3005,()=>{console.log("started at http://localhost:3005")})

const Connection = require("./db.js");
const express = require("express");
const cookieParser = require("cookie-parser");
const Auth = require("./Routes/auth");
const Notes = require("./Routes/notes");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
var cors = require("cors");

const app = express();

app.use(cookieParser());

const allowedOrigins = ["http://localhost:3005", "http://localhost:3000"]; // Add more origins as needed
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));

Connection();

app.use(express.json());
app.use("/api/auth", Auth);
app.use("/api/notes", Notes);

// In-memory storage for OTPs (Replace with a database for production)
const otpStore = {};

// Nodemailer Transporter Configuration
const transporter = nodemailer.createTransport({
  service: "Gmail", // Replace with your email service
  auth: {
    user: "your-email@gmail.com", // Replace with your email
    pass: "your-email-password", // Replace with your email app password
  },
});

// Endpoint to send OTP
app.post("/api/send-otp", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res
      .status(400)
      .json({ success: false, message: "Email is required." });
  }

  // Generate a random 6-digit OTP
  const otp = crypto.randomInt(100000, 999999).toString();

  // Store OTP with an expiration time (5 minutes)
  otpStore[email] = { otp, expiresAt: Date.now() + 5 * 60 * 1000 };

  // Send the OTP email
  try {
    await transporter.sendMail({
      from: '"Your App Name" <your-email@gmail.com>',
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP is ${otp}. It will expire in 5 minutes.`,
    });

    res.status(200).json({ success: true, message: "OTP sent successfully." });
  } catch (error) {
    console.error("Error sending OTP:", error);
    res.status(500).json({ success: false, message: "Failed to send OTP." });
  }
});

// Endpoint to verify OTP
app.post("/api/verify-otp", (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res
      .status(400)
      .json({ success: false, message: "Email and OTP are required." });
  }

  const storedOtp = otpStore[email];

  if (!storedOtp) {
    return res
      .status(400)
      .json({ success: false, message: "OTP not found for this email." });
  }

  if (Date.now() > storedOtp.expiresAt) {
    return res
      .status(400)
      .json({ success: false, message: "OTP has expired." });
  }

  if (storedOtp.otp !== otp) {
    return res.status(400).json({ success: false, message: "Invalid OTP." });
  }

  // OTP is valid
  delete otpStore[email]; // Clear OTP after verification
  res
    .status(200)
    .json({ success: true, message: "OTP verified successfully." });
});

// Test route
app.post("/", (req, res) => {
  res.send("Divya");
  console.log("Post request received");
});

app.listen(3005, () => {
  console.log("Server started at http://localhost:3005");
});
