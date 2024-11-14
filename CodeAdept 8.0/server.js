const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const axios = require("axios"); // Import axios

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

// Email credentials
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "********@gmail.com",
    pass: "YOUR_EMAIL_PASSWORD" // Replace with your actual password or use environment variables
  },
});

// Verify email transport
contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

// Endpoint for contact form submission
router.post("/contact", async (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const captchaToken = req.body.captchaToken; // Get the captcha token from the request

  // Verify reCAPTCHA
  const secretKey = "6LcpSGUqAAAAAFkx2gFHsGnNTND9z2ytqBm8t8GH"; // Your secret key
  const captchaVerificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`;

  try {
    const response = await axios.post(captchaVerificationUrl);
    const { success } = response.data;

    if (!success) {
      return res.status(400).json({ error: "reCAPTCHA verification failed." });
    }

    const mail = {
      from: name,
      to: "********@gmail.com",
      subject: "Contact Form Submission - Portfolio",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Phone: ${phone}</p>
             <p>Message: ${message}</p>`,
    };

    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json(error);
      } else {
        res.json({ code: 200, status: "Message Sent" });
      }
    });
  } catch (error) {
    console.error("Error verifying reCAPTCHA:", error);
    res.status(500).json({ error: "An error occurred while verifying reCAPTCHA." });
  }
});
