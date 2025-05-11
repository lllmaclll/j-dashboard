// Library
import React from 'react'
import { FiSearch, FiX } from 'react-icons/fi'
import { AnimatePresence, motion } from 'framer-motion'

interface SearchBarProps {
  searchTerm: string
  onSearchTermChange: (term: string) => void
  onClear: () => void
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchTermChange, onClear }) => {
  return (
    <form className="relative w-full sm:max-w-xs">
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="input input-primary input-bordered w-full pr-10"
          value={searchTerm}
          onChange={(e) => onSearchTermChange(e.target.value)}
        />
        
        {/* ไอคอนซ้อนใน flex เดียวกัน */}
        <div className="absolute right-3 z-10">
          <AnimatePresence mode="wait" initial={false}>
            {searchTerm.length > 0 ? (
              <motion.button
                key="clear"
                type="button"
                onClick={onClear}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="flex"
              >
                <FiX className="text-2xl text-gray-500 hover:text-gray-700" />
              </motion.button>
            ) : (
              <motion.div
                key="search"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
              >
                <FiSearch className="text-2xl text-gray-400" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </form>
  )
}

export default SearchBar
