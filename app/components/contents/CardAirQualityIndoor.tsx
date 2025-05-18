// Library
import React from 'react'

// Context
import { useLanguage } from '@context/LanguageContext';

// Hooks
import { useAQIIndoor } from '@app/hooks/useAQIIndoor';

// Utils
import { getAQIData } from '@utils/getAQIData';

// Components
import { SkeletonCard } from '@components/SkeletonCard';
import ErrorMessage from '@components/alerts/ErrorMessage';
import NoData from '@components/alerts/NoData';

const CardAirQualityIndoor: React.FC = () => {
  const { translations } = useLanguage();

  const { aqiRoomData, initialLoading, error } = useAQIIndoor();

  if (initialLoading) return <SkeletonCard />;
  if (error) return <ErrorMessage message="ไม่สามารถโหลดข้อมูล aqi ภายในห้องได้" />;
  if (!aqiRoomData) return <NoData />;
  if (aqiRoomData["PM2.5"] < 0 || aqiRoomData["PM10"] < 0) return <ErrorMessage message="Sensor error" />;

  const aqiValue = aqiRoomData["PM2.5"];
  const aqiData = getAQIData(aqiValue, translations);

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
        <p className={`font-semibold ${aqiData.color}`}>{aqiRoomData["PM2.5"]} AQI {aqiData.level}</p>
        <p className='font-normal'>PM2.5 <span className='text-lime-400 font-semibold'>{aqiRoomData["PM2.5"]}</span> {translations.unit.pm} {translations.unit.avg24}</p>
        <p className='font-normal'>PM10 <span className='text-green-400 font-semibold'>{aqiRoomData["PM10"]}</span> {translations.unit.pm} {translations.unit.avg24}</p>
        <p className='font-normal'>{translations.temperature} <span className='text-sky-400 font-semibold'>{aqiRoomData.Temp}</span>  °C</p>
        <p className='font-normal'>{translations.humidity} <span className='text-sky-400 font-semibold'>{aqiRoomData.Hum}</span> %</p>
      </div>
    </div>
  )
}

export default CardAirQualityIndoor
