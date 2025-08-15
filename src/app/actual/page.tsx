import CalendarEvent from '@/components/Calendar/Calendar'
import Gallery from '@/components/Gallery/PhotoGallery'

export default function ActualPage() {
  return (
	 <div className='pt-[100px] md:pt-[150px]'>
		<section className="calendar">
			<div className="calendar__container flex flex-col-reverse items-center  md:flex-row  justify-around gap-8">
 <CalendarEvent/>
 <div className="clalendar__info">
	<h2 className="text-3xl font-bold mb-6">Календар школи</h2>
	<ul className="calendar__list space-y-3">
		<li className='flex items-center gap-4'><span className='event highlight-date-uk'></span> Державні свята України</li>
		<li className='flex items-center gap-4'><span className='event  highlight-date--ste'></span> Події нашої школи</li>
		<li className='flex items-center gap-4'><span className='event highlight-date-st'></span> Навчальні дні</li>
	</ul>
 </div>
			</div>
		</section>
	
	 
		 <Gallery/>
		</div>
  )
}
