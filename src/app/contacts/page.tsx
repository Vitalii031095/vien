import Image from "next/image"


const Contact = () => {
  return (
	<>
    <section className="contacts">
      <div className="conatcts__container">
        <h2 className="meta__title contacts__title">Наші Контакти:</h2>

        <div className="contacts__map flex flex-col-reverse md:flex-row ">
          <div className="contacts__iframe">
            <iframe
				title="Мапа розташування школи"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4521.882060068509!2d9.143094179295764!3d55.48112559999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464b5d354fcc632d%3A0x4283c26ab87373ff!2s%C3%98sterbyskolen!5e0!3m2!1suk!2sua!4v1734020190526!5m2!1suk!2sua"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="contacts__map-text text-map md:pt-10">
            <div className="text-map">
             
				  <p>Заняття проводяться кожну другу неділю <br/>
				   з 10:00 до 12.45 </p>
				  <p className="mt-3">За адресою:</p>
				  <div className="text-map__adress">
				  {/* <FaLocationDot style={{ color: "red" }} /> */}
				  Østerbyskolen,Nygade 17,6600 <span>Vejen</span>
				  </div>
             <div>
							  <h3 className="font-semibold mt-4 mb-2">Ми в мережі</h3>
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
        </div>
      </div>
    </section>
	 
	 </>
  )
}

export default Contact
