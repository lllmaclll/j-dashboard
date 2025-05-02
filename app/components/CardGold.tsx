import React from 'react'

const CardGold: React.FC = () => {
  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 z-0">
      <table className="table">
        <thead className='font-bold text-xl bg-base-300'>
          <tr>
            <th></th>
            <th>ทองคำแท่ง 96.5%</th>
            <th>ทองรูปพรรณ 96.5%</th>
          </tr>
        </thead>
        <tbody className='font-medium text-lg'>
          <tr>
            <td>ซื้อ</td>
            <td>51,000.00</td>
            <td>50,088.64</td>
          </tr>
          <tr>
            <td>ขาย</td>
            <td>51,100.00</td>
            <td>51,900.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CardGold
