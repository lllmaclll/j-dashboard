// Library
import React, { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router'
import { MdLanguage } from "react-icons/md";

// Context
import { useLanguage } from '@context/LanguageContext';

// Hooks
import { useAQIOutdoorStations } from '@app/hooks/useAQIOutdoorStations';

// Types
import { AQIOutdoorResponse } from '@app/types/aqi-outdoor';

// Utils
import getPageTitle from '@utils/getPageTitle';

// Components
import SelectDropdown from '@components/SelectDropdown'
import SearchBar from '@components/SearchBar'
import CardRenderer from '@components/contents/CardRenderer';

const Main: React.FC = () => {
  const location = useLocation()

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedOption, setSelectedOption] = useState('all');
  const [showSkeleton, setShowSkeleton] = useState(false)
  const [filteredStations, setFilteredStations] = useState<AQIOutdoorResponse[] | null>(null)

  const { stations, loading: stationsLoading } = useAQIOutdoorStations()

  const { translations, language, setLanguage } = useLanguage();
    
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'th' : 'en');
  };

  const title = getPageTitle(location.pathname, translations);

  // searchbar handle clear filed
  const handleClear = () => {
    setSearchTerm('')
    setFilteredStations(null)
    setSelectedOption('all')

    setShowSkeleton(true)
    // ปิด skeleton หลังจาก delay สั้น ๆ (simulate loading)
    setTimeout(() => setShowSkeleton(false), 100)
  }

  // select option handler
  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setSelectedOption(value)
    setSearchTerm('')

    if (value === 'all') {
      setShowSkeleton(true)
      // ปิด skeleton หลังจาก delay สั้น ๆ (simulate loading)
      setTimeout(() => setShowSkeleton(false), 100) // 0.5 วินาที
    }
  }

  // สร้าง options สำหรับ SelectDropdown โดยใช้ useMemo เพื่อไม่ให้สร้างใหม่ทุกครั้ง
  const dropdownOptions = useMemo(() => {
    return stations && Array.isArray(stations.stations)
      ? [
          { label: translations.dropdown.allStations, value: 'all' },
          ...stations.stations.map((station) => ({
            label: language === 'th' ? station.nameTH || translations.dropdown.unnamed : station.nameEN || translations.dropdown.unnamed,
            value: station.stationID,
          }))
        ]
      : [];
  }, [stations, language]);

  // searchbar handle real-time filtering
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredStations(null)
      return
    }

    if (!stations?.stations?.length) return

    const term = searchTerm.trim().toLowerCase()

    const matched = stations.stations.filter((station) =>
      [
        station.nameTH,
        station.nameEN,
        station.stationID,
        station.areaTH,
        station.areaEN
      ]
        .filter(Boolean)
        .some((field) => field.toLowerCase().includes(term))
    )

    setFilteredStations(matched.length > 0 ? matched : [])
    setSelectedOption('all') // force "all" view when searching
  }, [searchTerm, stations])

  return (
    <div className="h-screen p-5 flex flex-col">
      <div className="flex flex-col sm:flex-row items-center mb-5">
        <div className="text-3xl font-bold mb-5 sm:mb-0 sm:me-3 whitespace-nowrap">{title}</div>

        <div className="flex flex-col sm:flex-row justify-end w-full gap-5 sm:ms-5 lg:ms-0">
          {location.pathname === '/air' && (
            <>
              {/* Select Dropdown */}
              {stationsLoading ? (
                <div className="w-full sm:max-w-xs">
                  <div className="skeleton h-10 w-full rounded-md"></div>
                </div>
              ) : (
                <SelectDropdown
                  value={selectedOption}
                  onChange={handleDropdownChange}
                  className="w-full sm:max-w-xs"
                  options={dropdownOptions}
                />
              )}

              {/* Search */}
              <SearchBar
                searchTerm={searchTerm}
                onSearchTermChange={setSearchTerm}
                onClear={handleClear}
              />
            </>
          )}

          {/* Language */}
          <div className="hidden sm:flex items-center gap-2 bg-base-200 rounded-4xl ">
            <MdLanguage className='cursor-pointer btn btn-circle' size={32} onClick={toggleLanguage} />
            <span className="font-bold me-2">{language === 'en' ? 'EN' : 'TH'}</span>
          </div>
        </div>
      </div>

      <div className="bg-base-200 h-full rounded-xl p-5 overflow-auto">
        <CardRenderer
          pathname={location.pathname}
          {...(location.pathname === '/air'
            ? { selectedOption, showSkeleton, filteredStations }
            : {})}
        />
      </div>
    </div>
  )
}

export default Main