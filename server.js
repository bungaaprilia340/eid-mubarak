const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/send", async (req, res) => {
  const { nama, ttl, q1, q2, q3 } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "bungaaprilia2009@gmail.com",
        pass: "qtob wpdm ucui agce"
      }
    });

    let mailOptions = {
      from: "bungaaprilia2009@gmail.com",
      to: "bungaaprilia2009@gmail.com",
      subject: "Jawaban dari dia 💌",
      text: `
💌 DATA DIRI
Nama: ${nama}
Tanggal Lahir: ${ttl}

💭 JAWABAN DIA
1. ${q1}
2. ${q2}
3. ${q3}
      `
    };

    await transporter.sendMail(mailOptions);
    res.send("Email berhasil dikirim 💖");
  } catch (error) {
    console.log(error);
    res.status(500).send("Gagal kirim email");
  }
});

app.listen(3000, () => {
  console.log("Server jalan di http://localhost:3000");
});