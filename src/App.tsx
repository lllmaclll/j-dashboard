import './App.css'
import Sidebar from '@src/components/Sidebar'
import Content from '@src/components/Main'

function App() {

  return (
    <main className='flex sm:flex-row flex-col'>
      <Sidebar />
      <Content />
    </main>
  )
}

export default App
