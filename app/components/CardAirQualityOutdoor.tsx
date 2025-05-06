import React from 'react'
import Good from '@assets/Good.png'
import VeryGood from '@assets/Verygood.png'
import Moderate from '@assets/Moderate.png'
import UnHealthy from '@assets/Unhealthy.png'
import VeryUnHealthy from '@assets/VeryUnhealthy.png'
import { AQIResponse } from '@app/types/aqi'

const CardAirQualityOutdoor: React.FC<{ data: AQIResponse }> = ({ data }) => {
  // ฟังก์ชันตรวจสอบระดับ AQI
  const getAQIData = (aqi: number) => {
    if (aqi <= 25) {
      return {
        level: 'ดีมาก',
        color: 'text-blue-400',
        image: VeryGood
      }
    } else if (aqi <= 50) {
      return {
        level: 'ดี',
        color: 'text-green-400',
        image: Good
      }
    } else if (aqi <= 100) {
      return {
        level: 'ปานกลาง',
        color: 'text-yellow-300',
        image: Moderate
      }
    } else if (aqi <= 200) {
      return {
        level: 'แย่',
        color: 'text-orange-500',
        image: UnHealthy
      }
    } else {
      return {
        level: 'แย่มาก',
        color: 'text-red-500',
        image: VeryUnHealthy
      }
    }
  }

  const aqiValue = data.AQILast.AQI.aqi ? parseFloat(data.AQILast.AQI.aqi) : 0;
  const aqiData = getAQIData(aqiValue);

  return (
    <div className='glass w-full rounded-xl p-5 flex flex-col md:flex-row gap-5 mb-5 z-0'>
      {/* Image - เปลี่ยนตามระดับ AQI */}
      <div className="avatar self-center md:self-start">
        <div className="w-50 h-50 rounded-full overflow-hidden">
          <img src={aqiData.image} alt={`AQI Level: ${aqiData.level}`} className="object-cover w-full h-full" />
        </div>
      </div>

      {/* Text */}
      <div className='text-2xl w-full'>
        {/* เปลี่ยนข้อความและสีตามระดับ AQI */}
        <p className={`font-semibold ${aqiData.color}`}>
          {data.AQILast.AQI.aqi} AQI {aqiData.level}
        </p>
        
        <p className='font-normal'>
          {data.stationID} {data.nameTH} {data.areaTH} {data.AQILast.date} {data.AQILast.time}น.
        </p>
        
        <p className='font-normal'>
          PM2.5 <span className='text-lime-400 font-semibold'>{data.AQILast.PM25.aqi}</span> ug/m³ Avg 24Hr
        </p>
        
        <p className='font-normal'>
          PM10 <span className='text-green-400 font-semibold'>{data.AQILast.PM10.aqi}</span> ug/m³ Avg 24Hr
        </p>
        
        <p className='font-normal'>
          CO <span className='text-sky-400 font-semibold'>{data.AQILast.CO.aqi}</span> ppm Avg 8Hr
        </p>
      </div>
    </div>
  )
}

export default CardAirQualityOutdoor