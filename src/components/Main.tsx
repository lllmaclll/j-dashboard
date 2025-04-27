import React from 'react'
import Sidebar from '@src/components/Sidebar'
import Content from '@src/components/Content '

const Main: React.FC = () => {
  return (
    <main className='flex sm:flex-row flex-col'>
      <Sidebar />
      <Content />
    </main>
  )
}

export default Main