// Library
import React from 'react'

// Context
import { useLanguage } from '@context/LanguageContext'

// Types
import { AQIResponse } from '@app/types/aqi'

// Utils
import { getAQIData } from '@utils/getAQIData'

const CardAirQualityOutdoor: React.FC<{ data: AQIResponse }> = ({ data }) => {
  const { translations, language } = useLanguage();

  const aqiValue = data.AQILast.AQI.aqi ? parseFloat(data.AQILast.AQI.aqi) : 0;
  const aqiData = getAQIData(aqiValue, translations);
  const { AQI, PM25, PM10, CO, date, time } = data.AQILast

  return (
    <div className='glass w-full rounded-xl p-5 flex flex-col md:flex-row gap-5 mb-5 z-0'>
      {/* Image - เปลี่ยนตามระดับ AQI */}
      <div className="avatar self-center md:self-start">
        <div className="w-50 h-50 rounded-full overflow-hidden aspect-square">
          <img src={aqiData.image} alt={`${translations.airAltImage}: ${aqiData.level}`} aria-label={`${translations.airLevelAriaLabel}: ${aqiData.level}`} className="object-cover w-full h-full" />
        </div>
      </div>

      {/* Text */}
      <div className='text-2xl w-full'>
        {/* เปลี่ยนข้อความและสีตามระดับ AQI */}
        <p className={`font-semibold ${aqiData.color}`}>{AQI.aqi} AQI {aqiData.level}</p>

        <p className='font-normal'>
          {data.stationID} {language === 'th' ? data.nameTH : data.nameEN} {language === 'th' ? data.areaTH : data.areaEN} {date} {time}
        </p>

        <p className='font-normal'>
          PM2.5 <span className='text-lime-400 font-semibold'>{PM25.aqi}</span> {translations.unit.pm} {translations.unit.avg24}
        </p>

        <p className='font-normal'>
          PM10 <span className='text-green-400 font-semibold'>{PM10.aqi}</span> {translations.unit.pm} {translations.unit.avg24}
        </p>

        <p className='font-normal'>
          CO <span className='text-sky-400 font-semibold'>{CO.aqi}</span> {translations.unit.co} {translations.unit.avg8}
        </p>
      </div>
    </div>
  )
}

export default CardAirQualityOutdoor