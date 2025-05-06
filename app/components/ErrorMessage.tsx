// components/ErrorMessage.tsx
import React from 'react'

interface ErrorMessageProps {
  message?: string
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message = 'เกิดข้อผิดพลาดในการโหลดข้อมูล' }) => {
  return (
    <div className="alert alert-error shadow-lg mt-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01M5.21 6.79a10 10 0 0113.58 0m-13.58 0a10 10 0 000 10.42m13.58-10.42a10 10 0 010 10.42m-13.58 0L12 21.5m0 0L5.21 17.21" /></svg>
      <span>{message}</span>
    </div>
  )
}

export default ErrorMessage
