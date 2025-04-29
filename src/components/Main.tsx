import React, { useState } from 'react'
import SearchBar from '@src/components/SearchBar'
import SelectDropdown from '@src/components/SelectDropdown'

const Main: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedOption, setSelectedOption] = useState('option1')

  // searchbar handle clear filed
  const handleClear = () => {
    setSearchTerm('')
  }

  // searchbar handle enter
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (searchTerm.trim() !== '') {
      console.log('Searching for:', searchTerm)
    }
  }

  // select option handler
  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value)
  }

  return (
    <div className="w-screen h-screen p-5 flex flex-col">
      <div className="flex flex-col sm:flex-row items-center mb-5">
        <div className="text-3xl font-bold mb-5 sm:mb-0">Main</div>

        <div className="flex flex-col sm:flex-row justify-end w-full gap-5 sm:ms-5 lg:ms-0">
          <SelectDropdown
            value={selectedOption}
            onChange={handleDropdownChange}
            className="w-full sm:max-w-xs"
            options={[
              { label: 'VScode', value: 'vscode' },
              { label: 'VScode fork', value: 'vscode-fork' },
              { label: 'Another VScode fork', value: 'another-vscode-fork' },
            ]}
          />

          <SearchBar
            searchTerm={searchTerm}
            onSearchTermChange={setSearchTerm}
            onClear={handleClear}
            onSubmit={handleSubmit}
          />
        </div>
      </div>

      <div className="bg-base-200 h-full rounded-xl p-5">sub content</div>
    </div>
  )
}

export default Main
