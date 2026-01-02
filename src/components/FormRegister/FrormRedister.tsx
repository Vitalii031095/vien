"use client"
import React from "react"
import { useRouter } from "next/navigation"

// const url = 'https://formspree.io/f/xgvznqbn'

export default function FrormRedister() {
  const router = useRouter()

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.target as HTMLFormElement // ✅ currentTarget завжди вказує на форму
    const formData = new FormData(form)

    const today = new Date()
    const month = today.getMonth()
    if (month === 6 || 7 || 11 || 0) {
      const dayNumber = today.getDate()
      const conditionsJuly = month === 6 && dayNumber >= 15
      const conditionsAugust = month === 7 && dayNumber <= 15
      const conditionsDecember = month === 11 && dayNumber >= 5
      const conditionsJanuar = month === 0 && dayNumber <= 5
      if (
        conditionsJanuar ||
        conditionsJuly ||
        conditionsAugust ||
        conditionsDecember
      ) {
        console.log(month, dayNumber, "тобі доступна форма")
        const data = Object.fromEntries(formData.entries())

        //для перевірки чи дитина старша хотяби трьох років
        const dateString = formData.get("data") as string
        const birthday = new Date(dateString)

        const age = today.getFullYear() - birthday.getFullYear()

        if (age < 4 || age > 8) {
          alert("Дитина має бути старше 3 років")
          return
        }

        const res = await fetch("/register/api", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })

        if (res.ok) {
          alert("Дані надіслано!")
          form.reset() //якщо буде ерор заміни на form.reset()-e.target.reset()
          router.push("/about")
        } else {
          alert("Помилка при відправленні")
        }
      } else {
        alert("Прийняття форми та відправка ще не доступні")
      }
    }
  }
  return (
    <form
      onSubmit={onFormSubmit}
      className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md space-y-6"
    >
      <p className="text-sm text-red-600 italic mb-4">
        Усі поля обов’язкові для заповнення
      </p>
      {/* Дитина */}
      <fieldset className="border border-gray-300 p-4 rounded-md">
        <legend className="font-semibold text-lg text-gray-700">
          Особисті дані дитини:
        </legend>

        <label
          htmlFor="nameChildren"
          className="block mt-4 text-sm font-medium"
        >
          Імʼя дитини
        </label>
        <input
          type="text"
          name="name"
          required
          id="nameChildren"
          placeholder="Введіть імʼя"
          className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
        />

        <label htmlFor="secondName" className="block mt-4 text-sm font-medium">
          Прізвище дитини
        </label>
        <input
          type="text"
          required
          name="secondName"
          id="secondName"
          placeholder="Введіть прізвище"
          className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
        />

        <label htmlFor="data" className="block mt-4 text-sm font-medium">
          Дата народження дитини
        </label>
        <input
          required
          type="date"
          name="data"
          id="data"
          className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
        />
      </fieldset>

      {/* Мама */}
      <fieldset className="border border-gray-300 p-4 rounded-md">
        <legend className="font-semibold text-lg text-gray-700">
          Особисті дані мами:
        </legend>

        <label htmlFor="matherName" className="block mt-4 text-sm font-medium">
          Імʼя та прізвище мами
        </label>
        <input
          required
          type="text"
          name="matherName"
          id="matherName"
          placeholder="Введіть імʼя та прізвище"
          className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
        />

        <label
          htmlFor="matherNumber"
          className="block mt-4 text-sm font-medium"
        >
          Номер телефону мами
        </label>
        <input
          required
          type="tel"
          name="matherPhone"
          id="matherNumber"
          pattern="^(\+?[0-9]{10,15})$"
          placeholder="Введіть номер"
          className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
        />
      </fieldset>

      {/* Тато */}
      <fieldset className="border border-gray-300 p-4 rounded-md">
        <legend className="font-semibold text-lg text-gray-700">
          Особисті дані тата:
        </legend>

        <label htmlFor="fatherName" className="block mt-4 text-sm font-medium">
          Імʼя та прізвище тата
        </label>
        <input
          type="text"
          required
          name="fatherName"
          id="fatherName"
          placeholder="Введіть імʼя та прізвище"
          className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
        />

        <label
          htmlFor="fatherNumber"
          className="block mt-4 text-sm font-medium"
        >
          Номер телефону тата
        </label>
        <input
          required
          type="tel"
          name="fatherPhone"
          id="fatherNumber"
          pattern="^(\+?[0-9]{10,15})$"
          placeholder="Введіть номер"
          className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
        />
      </fieldset>

      {/* Адреса */}
      <fieldset className="border border-gray-300 p-4 rounded-md">
        <legend className="font-semibold text-lg text-gray-700">
          Спільна інформація
        </legend>

        <label htmlFor="adress" className="block mt-4 text-sm font-medium">
          Адреса
        </label>
        <input
          required
          type="text"
          name="adres"
          id="adress"
          placeholder="Місто або село"
          className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
        />
        <label htmlFor="email" className="block mt-4 text-sm font-medium">
          Ваш email
        </label>
        <input
          type="email"
          name="email"
          required
          id="email"
          placeholder="Email"
          className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
        />
      </fieldset>

      {/* Кнопка */}
      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Надіслати
        </button>
      </div>
    </form>
  )
}
