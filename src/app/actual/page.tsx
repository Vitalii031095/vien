import CalendarEvent from "@/components/Calendar/Calendar"
import Gallery from "@/components/Gallery/PhotoGallery"

export default function ActualPage() {
  return (
    <div className="pt-[100px] md:pt-[150px]">
      <section className="calendar">
        <div className="calendar__container flex  flex-col items-center   md:flex-row  justify-around gap-12">
          <div className="clalendar__info">
            <h2 className="text-3xl font-bold mb-6">Календар школи</h2>
            <ul className="calendar__list space-y-3">
              <li className="flex items-center gap-4">
                <span className="event highlight-date-uk"></span> Державні свята
                України
              </li>
              <li className="flex items-center gap-4">
                <span className="event  highlight-date--ste"></span> Події нашої
                школи
              </li>
              <li className="flex items-center gap-4">
                <span className="event highlight-date-st"></span> Навчальні дні
              </li>
            </ul>
          </div>
          <CalendarEvent />
        </div>
      </section>

      <div className="mt-10 text-left max-w-md mx-auto mb-8">
        <h3 className="text-2xl font-bold  mb-5 md:3xl">📋 Традиційні події школи</h3>
        <ul className="list-image-none pl-5 space-y-1 ">
          <li>✔️ День Незалежності України</li>
          <li>✔️ Чисте довкілля (Ren Natur)</li>
          <li>✔️ Осіннє свято</li>
          <li>✔️ Майстерня святого Миколая — розпис різдвяного печива</li>
          <li>✔️ Різдвяне свято</li>
          <li>✔️ Читання віршів до Дня народження Т. Г. Шевченка</li>
          <li>✔️ Великодні забави</li>
          <li>✔️ Святкування Дня Іменинника</li>
          <li>✔️ Поїздка в зоопарк</li>
          <li>✔️ Літній табір</li>
        </ul>
      </div>
      <Gallery />
    </div>
  )
}
