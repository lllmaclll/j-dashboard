import React from 'react'
import Good from '@assets/Good.png'

const CardAirQualityOutdoor: React.FC = () => {
  return (
    <div className='glass w-full rounded-xl p-5 flex flex-col md:flex-row gap-5 mb-5 z-0'>
      {/* Image */}
      <div className="avatar self-center md:self-start">
        <div className="w-50 h-50 rounded-full overflow-hidden">
          <img src={Good} alt="AQI" className="object-cover w-full h-full" />
        </div>
      </div>

      {/* Text */}
      <div className='text-2xl w-full'>
        <p className='font-semibold text-yellow-300'>69 AQI ปานกลาง</p>
        <p className='font-normal'>02t แขวงหิรัฐรูจี เขตธนบุรี, กรุงเทพฯ 31 มี.ค. 2568 22:00 น.</p>
        <p className='font-normal'>PM2.5 <span className='text-lime-400 font-semibold'>29.6</span> ug/m³ Avg 24Hr</p>
        <p className='font-normal'>PM10 <span className='text-green-400 font-semibold'>62</span> ug/m³ Avg 24Hr</p>
        <p className='font-normal'>CO <span className='text-sky-400 font-semibold'>1.90</span> ppm Avg 8Hr</p>
      </div>
    </div>
  )
}

export default CardAirQualityOutdoor
