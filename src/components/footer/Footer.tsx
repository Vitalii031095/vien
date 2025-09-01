import React from 'react';
import stl from './footer.module.css'

const Footer = () => {
  return (
	 <div className={stl.footer}>
		<div className="footer__container">
			<div className={stl.footer__menu}>
		<div>
			  <h3 className="font-semibold mb-2">Контакти</h3>
			  <p>school@ukrainian.dk</p>
			  <p>м. Копенгаген, вул. Свободи, 12</p>
			</div>

			<div>
			  <h3 className="font-semibold mb-2">Графік</h3>
			  <p> 10:00–12:45</p>
			  <p>Дитяча та молодша група</p>
			</div>

			<div>
			  <h3 className="font-semibold mb-2">Ми в мережі</h3>
			  <a
				 href="https://t.me/ukrainian_school"
				 className="underline hover:text-yellow-300 block"
				 target="_blank"
				 rel="noopener noreferrer"
			  >
				 Telegram
			  </a>
			  <a
				 href="https://facebook.com/ukrainian.school"
				 className="underline hover:text-yellow-300 block"
				 target="_blank"
				 rel="noopener noreferrer"
			  >
				 Facebook
			  </a>
			</div>
			</div>
		</div>
		<div className={stl.footer__info}>
			© 2025 Ukrainian School in Denmark. Тепло України — навіть за кордоном 💙💛
		 </div>
		</div>
  )
}

export default Footer