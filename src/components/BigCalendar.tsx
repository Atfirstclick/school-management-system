"use client";

import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar';
import moment from 'moment';
import "moment/locale/tr";
import { calendarEvents } from '@/lib/data';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useState } from 'react';

moment.locale("tr");
const localizer = momentLocalizer(moment);

const messages = {
  date: 'Tarih',
  time: 'Saat',
  event: 'Etkinlik',
  allDay: 'Tüm gün',
  week: 'Hafta',
  day: 'Gün',
  month: 'Ay',
  previous: 'Geri',
  next: 'İleri',
  yesterday: 'Dün',
  tomorrow: 'Yarın',
  today: 'Bugün',
  agenda: 'Ajanda',
  noEventsInRange: 'Bu aralıkta etkinlik yok.',
  January: 'Ocak',
  February: 'Şubat',
  March: 'Mart',
  April: 'Nisan',
  May: 'Mayıs',
  June: 'Haziran',
  July: 'Temmuz',
  August: 'Ağustos',
  September: 'Eylül',
  October: 'Ekim',
  November: 'Kasım',
  December: 'Aralık',
  dateFormat: 'DD/MM/YYYY',
  timeFormat: 'HH:mm',
  Sun: 'Pazar',
  Mon: 'Pazartesi',
  Tue: 'Salı',
  Wed: 'Çarşamba',
  Thu: 'Perşembe',
  Fri: 'Cuma',
  Sat: 'Cumartesi',
  showMore: (total) => `+${total} daha`
};

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WEEK);

  const handleonChangeView = (selectedview: View) => {
    setView(selectedview);
  }
  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["week", "day"]}
      view={view}
      style={{ height: "98%"}}
      messages={messages}
      onView={handleonChangeView}
      min={new Date(2025,1,0,8,0,0)}
      max={new Date(2025,1,0,21,0,0)}
    />
  );
};

export default BigCalendar;
