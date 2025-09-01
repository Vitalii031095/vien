import Image from "next/image"

import MetaSection from "../components/Metasection/MetaSection"

export default function Home() {
  return (
    <>
      <section className="hero sec-top lg:min-h-screen  ">
        <div
          className="hero__container lg:min-h-[calc(100vh-95px)] flex flex-col
		"
        >
          <div className="hero__welcome welcome-hero flex items-center gap-15 justify-center max-[991px]:gap-5
			  max-[610px]:gap-3 max-[450px]:gap-0  max-[510px]:-ml-[60px] max-[440px]:-ml-[100px]">
            <Image
              className="hero__img  "
              src="/lastivka12.png"
              alt="lastivka"
              width={400}
              height={400}
            />

            <div className="welcome-hero__info  ">
              <p className="text-2xl md:text-3xl mb-4 text-amber-950">
                Вітаємо в українській
              </p>
              <h1 className="text-3xl md:text-5xl font-bold text-amber-650">
                Школі <q className="font-bodoni ml-3">Світанок</q>
              </h1>
            </div>
          </div>

          <div className="mt-8 lg:mt-auto mb-8">
            <h2 className=" text-xl md:text-5xl font-bold text-center text-[#1E1E1E] ">
              Ластівка — єднає українців у Данії
            </h2>
            <p className="m-4  md:text-xl text-center text-[#555]">
              Освітній простір для дітей та батьків, де зберігаються культура,
              мова і тепло рідної землі.
            </p>
          </div>
        </div>
      </section>
      <section className="features pb-5">
        <div className="features__container">
          <h2 className="features__title  text-xl md:text-3xl font-black text-center mb-10">
            Наша школа це:
          </h2>
          <ul className="features__list grid grid-cols-2 md:grid-cols-3 gap-4 gap-y-6 lg:grid-cols-4">
            <li className="features__item flex flex-col items-center gap-5">
              <Image
                className="rounded-2xl"
                src="/features/1.1.jpg"
                alt="lastivka"
                width={200}
                height={200}
              />
              <p className="md:text-xl m-w-[220px] text-center">
                Живе спілкування українською мовою
              </p>
            </li>
            <li className="features__item flex flex-col items-center gap-5">
              <Image
                className="rounded-2xl"
                src="/features/2.1.png"
                alt="lastivka"
                width={200}
                height={200}
              />
              <p className="md:text-xl m-w-[220px] text-center">
                Навчання з українським культурним і мовним акцентом
              </p>{" "}
            </li>
            <li className="features__item flex flex-col items-center gap-5">
              <Image
                className="rounded-2xl "
                src="/features/3.jpg"
                alt="lastivka"
                width={200}
                height={800}
              />
              <p className="md:text-xl m-w-[220px] text-center">
                Свята, пісні, творчість і традиції
              </p>
            </li>
            <li className="features__item flex flex-col items-center gap-5">
              <Image
                className="rounded-2xl"
                src="/features/4.png"
                alt="lastivka"
                width={200}
                height={200}
              />
              <p className="md:text-xl m-w-[220px] text-center">
                {" "}
                Люблячі вчителі
              </p>
            </li>
          </ul>
        </div>
      </section>
      <MetaSection />
      <section className="age pb-8 mt-10">
        <div className="age__container">
         
          <div className="age__wrapper flex flex-col-reverse items-center 
			 md:flex-row justify-center gap-10  min-w[900px]:gap-25">
            <div className="age__img">
              <Image className="rounded-xl" src="/fon3.jpg" alt="" width="450" height="450" />
            </div>
            <div className="age__info">
					 <h2 className="meta__title meta__title--bot  ">Вікові категорії:</h2>
              <ul className="flex flex-col space-y-2.5">
                <li className="text-xl md:text-2xl  p-2 bg-white rounded-lg shadow-md"> 7-8 років</li>
                <li className="text-xl md:text-2xl p-2 bg-white rounded-lg shadow-md">9-10 років</li>
                <li className="text-xl md:text-2xl p-2 bg-white rounded-lg shadow-md">10+ років</li>
					


              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

//       <section className="main ">
//         <div className="main__container">
//           <div className="main__info">
//             <p className="main__text">Вітаємо в школі</p>
//             <h1 className="main__title"> СВІТАНОК </h1>
// 				{/* <p className="main__text-info"> Тут ви знайдете інформацію про навчання та заходи нашjї спільноти.</p> */}
//           </div>
//           <div className="main__img">
//             {/* <img src={fon2} alt="" /> */}
//           </div>

//           {/* 	<img src={fon3} className="img-main" alt="school" /> */}
//         </div>

//         {/* <img src={fon3} className="img-main" alt="school" /> */}
//       </section>
// 		{/* <MetaSection/> */}
//      <section className="text">
// 	  {/* Українська школа в Данії — це місце, де діти зберігають рідну мову, традиції та зв'язок з Батьківщиною. Ми об'єднуємо родини, даруємо дітям знання, тепло та підтримку.

// 🕊️ Тут панує атмосфера турботи, поваги та справжньої української родинності.
// 📣 Оголошення / Актуально зараз:
// 🗓️ "15 квітня відбудеться великодній майстер-клас для дітей!"
// 👉 Деталі — у розділі "Майбутні заходи"
// 🌟 Що ми пропонуємо
// 📘 Навчання українською мовою

// 🎨 Творчі заняття та майстер-класи

// 📜 Вивчення культури та історії України

// 🎉 Святкування національних свят

// 🧡 Приєднуйтесь до нашої спільноти!
// Хочете, щоб ваша дитина навчалась у теплій українській атмосфері навіть за кордоном?
// Запрошуємо до нашої школи!

// 📍 [Місто/адреса]
// 📧 [Email]
// 📞 [Телефон] */}
// 	  </section>
