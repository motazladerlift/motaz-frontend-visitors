// Email API route for Vercel using nodemailer (مقتبس من الريبو المذكور)
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, date, subject, message } = req.body;

  // إعداد النقل عبر Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // أرسل لنفسك
      subject: `Contact Form: ${subject}`,
      text: `Naam: ${name}\nEmail: ${email}\nTelefoon: ${phone}\nDatum: ${date}\nBericht: ${message}`,
    });
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending email', error: error.message });
  }
}
