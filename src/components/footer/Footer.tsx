import React from 'react';
import stl from './footer.module.css'
import Image from 'next/image';

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
				 href="mailto:school@ukrainian.dk"
				 className=" hover:text-yellow-300 block"
				 target="_blank"
				 rel="noopener noreferrer"
			  >
				<p className='flex items-center gap-4'>
			<Image src="/email-icon.png" alt="email-icon" width={30} height={30}/>
				 <span className='no-underline'> Електронна пошта</span>
				 </p>
			  </a>
			  <a
				 href="https://www.facebook.com/share/1MkLC7RVFU/"
				 className="mt-2 hover:text-yellow-300 block"
				 target="_blank"
				 rel="noopener noreferrer"
			  >
				<p className='flex items-center gap-4'>
					<Image src="/facebook-icon.png" alt="facebook-icon" width={30} height={30}/>
				<span className=''>facebook</span>
				</p>
				
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