// Types
import { Translations } from '@app/types/translations'

// Assets
import Good from '@assets/Good.png'
import VeryGood from '@assets/Verygood.png'
import Moderate from '@assets/Moderate.png'
import UnHealthy from '@assets/Unhealthy.png'
import VeryUnHealthy from '@assets/VeryUnhealthy.png'

export const getAQIData = (aqi: number, translations: Translations) => {
  if (aqi <= 25) return { level: translations.aqi.veryGood, color: 'text-blue-400', image: VeryGood }
  if (aqi <= 50) return { level: translations.aqi.good, color: 'text-green-400', image: Good }
  if (aqi <= 100) return { level: translations.aqi.moderate, color: 'text-yellow-300', image: Moderate }
  if (aqi <= 200) return { level: translations.aqi.unhealthy, color: 'text-orange-500', image: UnHealthy }
  return { level: translations.aqi.veryUnhealthy, color: 'text-red-500', image: VeryUnHealthy }
}