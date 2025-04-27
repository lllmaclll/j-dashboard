import React from 'react'

interface SelectDropdownProps {
  selectedOption: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const SelectDropdown: React.FC<SelectDropdownProps> = ({ selectedOption, onChange }) => {
  return (
    <div className="flex items-center mb-5 w-full">
      {/* <label className="hidden sm:block text-lg font-medium mb-2">Select an Option</label> */}
      <select
        value={selectedOption}
        onChange={onChange}
        className="select select-bordered w-full"
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        <option value="option4">Option 4</option>
      </select>
    </div>
  )
}

export default SelectDropdown
