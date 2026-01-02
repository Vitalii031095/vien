"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function RegistrationSection() {
  const [isAvailable, setIsAvailable] = useState(false)

  useEffect(() => {
    const today = new Date()

    // Доступні періоди (рік можна замінити на будь-який, або перевіряти лише місяць+день)
    const periods = [
      {
        start: new Date(today.getFullYear(), 0, 1),
        end: new Date(today.getFullYear(), 0, 5),
      },
      {
        start: new Date(today.getFullYear(), 6, 15),
        end: new Date(today.getFullYear(), 7, 5),
      }, // 15.07 – 05.08
      {
        start: new Date(today.getFullYear(), 11, 5),
        end: new Date(today.getFullYear(), 11, 31),
      }, // 05.12 – 05.01
    ]

    // Перевірка чи сьогодні входить у якийсь із періодів
    const available = periods.some((p) => today >= p.start && today <= p.end)

    setIsAvailable(available)
  }, [])

  return (
    <section className="py-12 text-center bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Реєстрація</h2>
      <p className="mb-6 text-gray-700">
        Подати заявку можна з <strong>15.07 по 05.08</strong> та з{" "}
        <strong>05.12 по 05.01</strong>.
        <br />В цей час кнопка буде активна натисніть на неї та заповніть фому
      </p>

      {isAvailable ? (
        <Link
          href="/register"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
        >
          Зареєструватися
        </Link>
      ) : (
        <button
          disabled
          className="px-6 py-3 bg-gray-400 text-white rounded-xl cursor-not-allowed"
        >
          Заявка недоступна
        </button>
      )}
    </section>
  )
}
