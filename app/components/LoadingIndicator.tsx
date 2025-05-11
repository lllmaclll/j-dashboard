// Library
import React from 'react'

const LoadingIndicator: React.FC = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <span className="loading loading-spinner loading-lg text-primary"></span>
      <span className="ml-3 text-lg font-semibold text-primary">กำลังโหลดข้อมูล...</span>
    </div>
  )
}

export default LoadingIndicator
