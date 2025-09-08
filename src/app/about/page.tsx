import FaqAccordion from "@/components/Accordion/Accordion"
import Teachers from "@/components/teachers/Teachers"
import Image from "next/image"
import React from "react"

export default function Aboutpage() {
  return (
    <>
      <section className="about__story story">
        <div className="story__container sec-top ">
          <div className="story__wrapper grid md:grid-cols-2 justify-items-center gap-4 mt-10">
            <div className="story__info">
              <h2 className="text-3xl md:text-4xl font-bold mb-5">
                {" "}
                Історія школи
              </h2>
              <p className="max-w-120">
                Відкриття української школи &quot; Ластівка-Світанок &quot;
                відбулося 22.11.2020 року в м.Ваєн. Школа радо відкрила свої
                двері для 35 маленьких українців. Школа є одним із локальних
                відділів Ластівки.
              </p>
            </div>
            <div className="story__img">
              <Image className="mx-auto" src="/school1.png" alt="" width="300" height="300" />
              <p className="max-w-140">
                На сьогоднішній день в школі навчається 60 дітей,це 5 груп.
                Діляться досвідом і передають історію,культуру та українські
                традиції 8 талановитих вчителів. Учні школи беруть активну
                участь не лише в житті школи,а і в різних проектах і благодійних
                заходах на підтримку України в такий складний час. Будемо раді
                бачити нових українців у нашій дружній шкільній родині, адже
                &quot; Ластівка - об`єднує українців у Данії &quot;
              </p>
            </div>
          </div>
        </div>
      </section>
      <Teachers />

      <section className="subjects mt-7 md:mt-15">
        <div className="subjects__container">
          <h2 className="mb-5 text-center text-4xl font-black">Предмети</h2>
          <div className="subjects__wrapper flex max-[570px]:flex-col-reverse gap-10  max-w-[870px]:gap-24 md:items-center justify-center">
            <div className="subjects__images grid grid-cols-2">
              <Image
                className="img--subject"
                src="/subjects/1.png"
                alt=""
                width="200"
                height="200"
              />
              <Image
                className="img--subject"
                src="/subjects/2.png"
                alt=""
                width="200"
                height="200"
              />
              <Image
                className="img--subject"
                src="/subjects/3.png"
                alt=""
                width="200"
                height="200"
              />
              <Image
                className="img--subject"
                src="/subjects/4.png"
                alt=""
                width="200"
                height="200"
              />
              <Image
                className="img--subject"
                src="/subjects/5.png"
                alt=""
                width="200"
                height="200"
              />
              <Image
                className="img--subject"
                src="/subjects/6.png"
                alt=""
                width="200"
                height="200"
              />
              <p className="max-w-100" />
            </div>
            <div className="subjects__info">
              <ul className="subjects__list space-y-3 text-xl md:text-2xl">
                <li className=" subjects__item p-2 bg-white rounded-lg shadow-md">
                  Українська мова
                </li>
                <li className=" subjects__item p-2 bg-white rounded-lg shadow-md">
                  Українська література
                </li>
                <li className="subjects__item p-2 bg-white rounded-lg shadow-md">
                  Розвиток мовлення
                </li>
                <li className=" subjects__item p-2 bg-white rounded-lg shadow-md">
                  Я у світі
                </li>
                <li className=" subjects__item p-2 bg-white rounded-lg shadow-md">
                  Історія України
                </li>
                <li className=" subjects__item p-2 bg-white rounded-lg shadow-md">
                  {" "}
                  Креатив
                </li>
                <li className=" subjects__item p-2 bg-white rounded-lg shadow-md">
                  Українознавство
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="payment bg-gray-100 py-10">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Оплата
          </h2>
          <div className="bg-white p-6 rounded-md shadow-md space-y-4 text-gray-700 leading-relaxed">
            <p>
              💰 <strong>Оплата за навчання</strong> залежить від кількості
              занять у семестрі.
            </p>
            <p>
              🔹 Кожен семестр може мати різну кількість навчальних днів, тому
              вартість уточнюється на початку семестру.
            </p>
            <p>
              📧 Детальну інформацію щодо вартості та способів оплати ви
              отримаєте після реєстрації або можете дізнатися, звернувшись до
              адміністрації школи.
            </p>
          </div>
        </div>
      </section>
      <FaqAccordion />
    </>
  )
}
