import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { RateLimiterMemory } from "rate-limiter-flexible";

// const rateLimiter = new RateLimiterMemory({
//   points: 1, // максимум 5 запитів
//   duration: 160, // за 60 секунд
// });

export async function POST(req: Request) {
  const data = await req.json()

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,         // твій email
      pass: process.env.EMAIL_PASS          // пароль застосунку
    },
  })

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECEIVER,
    subject: 'Нова заявка На вступ до школи',
    text: `
      Ім'я дитини: ${data.name}
      Прізвище дитини: ${data.secondName}
      Дата народження: ${data.data}
      Мама: ${data.matherName} (${data.matherPhone})
      Тато: ${data.fatherName} (${data.fatherPhone})
      Адреса: ${data.adres}
     email для звязку: ${data.email}
    `
  }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}