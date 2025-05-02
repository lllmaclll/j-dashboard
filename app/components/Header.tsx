// Library
import React from 'react'
import { MdLanguage } from "react-icons/md";

// Components
import SelectDropdown from '@components/SelectDropdown'
import SearchBar from '@components/SearchBar'

// Types
interface HeaderProps {
  title: string;
  location: Location<any>
}

const Header: React.FC = ({title}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center mb-5">
      <div className="text-3xl font-bold mb-5 sm:mb-0">{title}</div>

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
  )
}

export default Header