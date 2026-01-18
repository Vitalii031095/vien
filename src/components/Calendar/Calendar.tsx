"use client"

import { useState } from "react"
import Calendar, { CalendarProps } from "react-calendar"
import "react-calendar/dist/Calendar.css"
import "./calendar.css"

type Event = {
  date: string // формат YYYY-MM-DD
  title: string
  event?: "uk" | "ste"
}

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

const formatDate = (date: Date) => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")
  return `${year}-${month}-${day}`
}

const events: Event[] = [
  { date: "2025-08-24", title: "День незалежності України 🎉", event: "uk" },
  { date: "2025-09-07", title: "Навчальний день 📘" },
  { date: "2025-09-21", title: "Навчальний день 📘" },
  { date: "2025-10-05", title: "Навчальний день 📘" },
  {
    date: "2025-10-26",
    title: "свято Осені 🍂, Навчальний день ",
    event: "ste",
  },
  { date: "2025-11-09", title: "Навчальний день 📘" },
  { date: "2025-11-23", title: "Навчальний день 📘" },
  {
    date: "2025-09-13",
    title: "Ren Natur (Чисте довкілля) 🧹-🗑️",
    event: "ste",
  },
  {
    date: "2025-12-07",
    title:
      "у Майстерні Святого Миколая (розпис різдвяного печива 🍪), навчальний день",
    event: "ste",
  },
  { date: "2025-12-13", title: "Різдвяна казка 🎄", event: "ste" },
  { date: "2026-01-11", title: "Навчальний день 📘" },
  { date: "2026-01-25", title: "Навчальний день 📘" },
  { date: "2026-02-08", title: "Навчальний день 📘" },
  { date: "2026-02-22", title: "Навчальний день 📘" },
  { date: "2026-03-08", title: "Навчальний день 📘" },
    { date: "2026-03-21", title: "Великодній захід", event: "ste" },
  { date: "2026-04-19", title: "Навчальний день 📘" },
  { date: "2026-04-26", title: "Навчальний день 📘" },
//   {
//     date: "2026-04-21",
//     title: "день Матері  та  останній дзвінок",
//     event: "ste",
//   },
  { date: "2026-05-10",  title: "день Матері  та  останній дзвінок", event: "ste", },
  { date: "2026-05-29", title: "табір", event: "ste" },
  { date: "2026-05-30", title: "табір", event: "ste" },
  { date: "2026-05-31", title: "табір", event: "ste" },
  {
    date: "2026-06-13",
    title: "поїздка у Madsbyparken, Fredericia",
    event: "ste",
  },
]

export default function CalendarEvent() {
  const [selectedDate, setSelectedDate] = useState<Value>(null)
  const [eventTitle, setEventTitle] = useState<string | null>(null)

  const handleDateChange: CalendarProps["onChange"] = (value) => {
    setSelectedDate(value)

    let date: Date | null = null

    if (Array.isArray(value)) {
      date = value[0] // якщо діапазон дат — беремо перший
    } else {
      date = value
    }

    if (!date) {
      setEventTitle(null)
      return
    }

    const dateStr = formatDate(date) // ✅ локальна дата без зсуву
    const event = events.find((e) => e.date === dateStr)
    setEventTitle(event ? event.title : null)
  }

  const tileClassName: CalendarProps["tileClassName"] = ({ date }) => {
    const dateStr = formatDate(date)

    if (events.some((e) => e.date === dateStr && e.event === "ste")) {
      return "highlight-date highlight-date--ste"
    }
    if (events.some((e) => e.date === dateStr && e.event === "uk")) {
      return "highlight-date highlight-date-uk"
    }
    if (events.some((e) => e.date === dateStr)) {
      return "highlight-date"
    }
    return null
  }

  return (
    <div style={{ textAlign: "center" }}>
      <Calendar
        locale="uk-UA"
        onChange={handleDateChange}
        value={selectedDate}
        tileClassName={tileClassName}
        prev2Label={null} // прибирає кнопку "<<"
        next2Label={null} // прибирає кнопку ">>"
        //   minDate={new Date(2025, 0, 1)}   // січень 2025
        //   maxDate={new Date(2025, 11, 31)} // грудень 2025
      />
      {eventTitle && (
        <p style={{ marginTop: "10px", fontWeight: "bold", color: "#d97706" }}>
          📅 {eventTitle}
        </p>
      )}
    </div>
  )
}
