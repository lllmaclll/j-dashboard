import React, { useState } from 'react'
import SearchBar from '@src/components/SearchBar'
import SelectDropdown from '@src/components/SelectDropdown'

const Content: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedOption, setSelectedOption] = useState('option1')

  const handleClear = () => {
    setSearchTerm('')
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (searchTerm.trim() !== '') {
      console.log('Searching for:', searchTerm)
    }
  }

  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value)
  }

  return (
    <div className="w-screen h-screen p-5 flex flex-col">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-5">
        <div className="text-3xl font-bold mb-5 sm:mb-0">Main</div>


        <div className='flex w-full sm:max-w-xs'>
        {/* <div className='flex flex-col sm:flex-row w-full sm:w-auto'> */}
          {/* <SelectDropdown
              selectedOption={selectedOption}
              onChange={handleDropdownChange}
          /> */}

          <SearchBar
            searchTerm={searchTerm}
            onSearchTermChange={setSearchTerm}
            onClear={handleClear}
            onSubmit={handleSubmit}
          />
        </div>


      </div>

      <div className="bg-base-200 h-full rounded-xl">sub content</div>
    </div>
  )
}

export default Content
