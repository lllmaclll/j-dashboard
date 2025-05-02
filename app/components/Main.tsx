// Library
import React, { useState } from 'react'
import { useLocation } from 'react-router'
import { MdLanguage } from "react-icons/md";

// Components
import SelectDropdown from '@components/SelectDropdown'
import SearchBar from '@components/SearchBar'
import CardRenderer from '@components/CardRenderer';

const Main: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedOption, setSelectedOption] = useState('option1')
  const location = useLocation()

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

  // get page title based on the current route
  const getPageTitle = (pathname: string) => {
    const routeMap: Record<string, string> = {
      '/': 'Home',
      '/air': 'Air',
      '/air-room': 'Air Room',
      '/gold': 'Gold',
      '/plug': 'Plug',
    }

    return routeMap[pathname] || 'Main'
  }

  const title = getPageTitle(location.pathname)

  return (
    <div className="h-screen p-5 flex flex-col">
      <div className="flex flex-col sm:flex-row items-center mb-5">
        <div className="text-3xl font-bold mb-5 sm:mb-0 whitespace-nowrap">{title}</div>

        <div className="flex flex-col sm:flex-row justify-end w-full gap-5 sm:ms-5 lg:ms-0">
          {location.pathname === '/air' && (
            <>
              {/* Select Dropdown */}
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

              {/* Search */}
              <SearchBar
                searchTerm={searchTerm}
                onSearchTermChange={setSearchTerm}
                onClear={handleClear}
                onSubmit={handleSubmit}
              />
            </>
          )}

          {/* Language */}
          <div className='hidden sm:flex items-center gap-2'>
            <MdLanguage size={32} className="" />
            <span className='font-bold'>TH</span>
          </div>
        </div>
      </div>

      <div className="bg-base-200 h-full rounded-xl p-5 overflow-auto">
        <CardRenderer pathname={location.pathname} />
      </div>
    </div>
  )
}

export default Main
