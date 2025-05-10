import { useGoldPrice } from '@app/hooks/useGoldPrice' // ปรับตาม path ของคุณ
import React from 'react'
import { SkeletonCard } from '../SkeletonCard'
import ErrorMessage from '../alerts/ErrorMessage'
import NoData from '../alerts/NoData'
import { useLanguage } from '@app/context/LanguageContext'
import { formatDateTime } from '@app/utils/formatDateTime'

const CardGold: React.FC = () => {
  const { data, loading, error } = useGoldPrice()
  const { translations, language } = useLanguage();

  if (loading) return <SkeletonCard />
  if (error) return <ErrorMessage message={error} />
  if (!data) return <NoData />

  const formatChange = (value: string) => {
    const num = parseFloat(value)
    const isUp = num > 0
    const isDown = num < 0
    const absValue = Math.abs(num).toLocaleString()
  
    if (isUp) return <span className="text-green-600 font-bold">📈 {translations.gold.up} {absValue} {translations.thaiCurrency}</span>
    if (isDown) return <span className="text-red-600 font-bold">📉 {translations.gold.down} {absValue} {translations.thaiCurrency}</span>
    return <span className="text-gray-600 font-bold">{translations.gold.noChange}</span>
  }

  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 z-0">
      <table className="table border border-base-content/5">
        <thead className='font-bold text-xl bg-base-300'>
          <tr>
            <th className=''></th>
            <th className='text-center'>{translations.gold.bar}</th>
            <th className='text-center'>{translations.gold.jewelry}</th>
          </tr>
        </thead>
        <tbody className='font-medium text-lg'>
          <tr>
            <td className='text-center'>{translations.gold.buy}</td>
            <td className='text-center'>{data.price.gold_bar.buy}</td>
            <td className='text-center'>{data.price.gold.buy}</td>
          </tr>
          <tr>
            <td className='text-center'>{translations.gold.sell}</td>
            <td className='text-center'>{data.price.gold_bar.sell}</td>
            <td className='text-center'>{data.price.gold.sell}</td>
          </tr>
        </tbody>
      </table>

      <div className="text-sm text-end mt-2 text-gray-500">
        {translations.gold.lastUpdated}: {formatDateTime(`${data.update_time} ${data.date}`, language)}
      </div>
      <div className="text-sm mt-1 text-center">
        {translations.gold.changeToday}: {formatChange(data.price.change.compare_yesterday)}
      </div>
    </div>
  )
}

export default CardGold
