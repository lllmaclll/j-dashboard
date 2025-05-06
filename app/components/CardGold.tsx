import React from 'react'
import { useGoldPrice } from '../hooks/useGoldPrice' // ปรับตาม path ของคุณ
// import LoadingIndicator from './LoadingIndicator'
import ErrorMessage from './ErrorMessage'
import NoData from './NoData'
import { SkeletonCard } from './SkeletonCard'

const CardGold: React.FC = () => {
  const { data, loading, error } = useGoldPrice()

  if (loading) return <SkeletonCard />
  if (error) return <ErrorMessage message={error} />
  if (!data) return <NoData />

  const formatChange = (value: string) => {
    const num = parseFloat(value)
    const isUp = num > 0
    const isDown = num < 0
    const absValue = Math.abs(num).toLocaleString()
  
    if (isUp) return <span className="text-green-600 font-bold">📈 เพิ่มขึ้น {absValue} บาท</span>
    if (isDown) return <span className="text-red-600 font-bold">📉 ลดลง {absValue} บาท</span>
    return <span className="text-gray-600 font-bold">ไม่เปลี่ยนแปลง</span>
  }

  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 z-0">
      <table className="table border border-base-content/5">
        <thead className='font-bold text-xl bg-base-300'>
          <tr>
            <th className=''></th>
            <th className='text-center'>ทองคำแท่ง 96.5%</th>
            <th className='text-center'>ทองรูปพรรณ 96.5%</th>
          </tr>
        </thead>
        <tbody className='font-medium text-lg'>
          <tr>
            <td className='text-center'>ซื้อ</td>
            <td className='text-center'>{data.price.gold_bar.buy}</td>
            <td className='text-center'>{data.price.gold.buy}</td>
          </tr>
          <tr>
            <td className='text-center'>ขาย</td>
            <td className='text-center'>{data.price.gold_bar.sell}</td>
            <td className='text-center'>{data.price.gold.sell}</td>
          </tr>
        </tbody>
      </table>

      <div className="text-sm text-end mt-2 text-gray-500">
        อัปเดตล่าสุด: {data.update_time} ({data.date})
      </div>
      <div className="text-sm mt-1 text-center">
        การเปลี่ยนแปลงราคาทองคำวันนี้: {formatChange(data.price.change.compare_yesterday)}
      </div>
    </div>
  )
}

export default CardGold
