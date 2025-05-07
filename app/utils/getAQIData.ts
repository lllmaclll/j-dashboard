import Good from '@assets/Good.png'
import VeryGood from '@assets/Verygood.png'
import Moderate from '@assets/Moderate.png'
import UnHealthy from '@assets/Unhealthy.png'
import VeryUnHealthy from '@assets/VeryUnhealthy.png'

export const getAQIData = (aqi: number) => {
  if (aqi <= 25) return { level: 'ดีมาก', color: 'text-blue-400', image: VeryGood }
  if (aqi <= 50) return { level: 'ดี', color: 'text-green-400', image: Good }
  if (aqi <= 100) return { level: 'ปานกลาง', color: 'text-yellow-300', image: Moderate }
  if (aqi <= 200) return { level: 'แย่', color: 'text-orange-500', image: UnHealthy }
  return { level: 'แย่มาก', color: 'text-red-500', image: VeryUnHealthy }
}
