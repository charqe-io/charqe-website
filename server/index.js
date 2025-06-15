import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, company, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  try {
    const port = Number(process.env.SMTP_PORT) || 465;
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      replyTo: `"${name}" <${email}>`,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      subject: `Yeni Proje Başvurusu - ${company || 'Şahıs'}`,
      text: [
        `Ad Soyad: ${name}`,
        `E-posta: ${email}`,
        company ? `Şirket/Kurum: ${company}` : undefined,
        '',
        'Mesaj:',
        message,
      ]
        .filter(Boolean)
        .join('\n'),
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Mail gönderilemedi' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
