'use client';

import { useState } from 'react';
import Calendar, { CalendarProps } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css';

type Event = {
  date: string; // формат YYYY-MM-DD
  title: string;
  event?: 'uk' | 'ste';
};

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const events: Event[] = [
  { date: '2025-08-24', title: 'День незалежності України 🎉', event: 'uk' },
  { date: '2025-09-01', title: 'Перший дзвоник 🔔', event: 'ste' },
  { date: '2025-12-25', title: 'Різдвяний концерт 🎄', event: 'ste' },
  { date: '2025-09-06', title: 'Навчальний день 🎄' },
  { date: '2025-09-20', title: 'Навчальний день 🎄' },
  { date: '2025-10-04', title: 'Навчальний день 🎄' },
];

export default function CalendarEvent() {
  const [selectedDate, setSelectedDate] = useState<Value>(null);
  const [eventTitle, setEventTitle] = useState<string | null>(null);

  const handleDateChange: CalendarProps['onChange'] = (value) => {
    setSelectedDate(value);

    let date: Date | null = null;

    if (Array.isArray(value)) {
      date = value[0]; // якщо діапазон дат — беремо перший
    } else {
      date = value;
    }

    if (!date) {
      setEventTitle(null);
      return;
    }

    const dateStr = date.toISOString().split('T')[0];
    const event = events.find((e) => e.date === dateStr);
    setEventTitle(event ? event.title : null);
  };

  const tileClassName: CalendarProps['tileClassName'] = ({ date }) => {
    const dateStr = date.toISOString().split('T')[0];

    if (events.some((e) => e.date === dateStr && e.event === 'ste')) {
      return 'highlight-date highlight-date--ste';
    }
    if (events.some((e) => e.date === dateStr && e.event === 'uk')) {
      return 'highlight-date highlight-date-uk';
    }
    if (events.some((e) => e.date === dateStr)) {
      return 'highlight-date';
    }
    return null;
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        tileClassName={tileClassName}
      />
      {eventTitle && (
        <p style={{ marginTop: '10px', fontWeight: 'bold', color: '#d97706' }}>
          📅 {eventTitle}
        </p>
      )}
    </div>
  );
}