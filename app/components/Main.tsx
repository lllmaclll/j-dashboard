// Library
import React, { useState } from 'react'
import { useLocation } from 'react-router'
import { MdLanguage } from "react-icons/md";

// Components
import SelectDropdown from '@components/SelectDropdown'
import SearchBar from '@components/SearchBar'
import CardRenderer from '@components/CardRenderer';
import { useAQIByStationID } from '@app/hooks/useAQIByStationID';
import { useAQIStations } from '@app/hooks/useAQIStations';
import CardAirQualityOutdoor from './CardAirQualityOutdoor';
import ErrorMessage from './ErrorMessage';
import { SkeletonCard } from './SkeletonCard';
import NoData from './NoData';

const Main: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedOption, setSelectedOption] = useState('all');
  const [showSkeleton, setShowSkeleton] = useState(false)
  const location = useLocation()

  const { stations, loading: stationsLoading, error: stationsError } = useAQIStations()
  const { aqiData, loading: dataLoading, error: dataError } = useAQIByStationID(selectedOption)

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
    const value = e.target.value
    setSelectedOption(value)
  
    if (value === 'all') {
      setShowSkeleton(true)
      // ปิด skeleton หลังจาก delay สั้น ๆ (simulate loading)
      setTimeout(() => setShowSkeleton(false), 500) // 0.5 วินาที
    }
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

  const dropdownOptions = stations && Array.isArray(stations.stations)
  ? [
      { label: 'สถานีทั้งหมด', value: 'all' },
      ...stations.stations.map((station) => ({
        label: station.nameTH || 'Unnamed Station',
        value: station.stationID,
      }))
    ]
  : [];

  return (
    <div className="h-screen p-5 flex flex-col">
      <div className="flex flex-col sm:flex-row items-center mb-5">
        <div className="text-3xl font-bold mb-5 sm:mb-0 whitespace-nowrap">{title}</div>

        <div className="flex flex-col sm:flex-row justify-end w-full gap-5 sm:ms-5 lg:ms-0">
          {location.pathname === '/air' && (
            <>
              {/* Select Dropdown */}
              {stationsError ? (
                <ErrorMessage message="ไม่สามารถโหลดข้อมูลสถานีได้" />
              ) : stationsLoading ? (
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
                onSubmit={handleSubmit}
              />
            </>
          )}

          {/* Language */}
          <div className="hidden sm:flex items-center gap-2">
            <MdLanguage size={32} />
            <span className="font-bold">TH</span>
          </div>
        </div>
      </div>

      <div className="bg-base-200 h-full rounded-xl p-5 overflow-auto">
        {location.pathname === '/air' ? (
          selectedOption === 'all' ? (
            stationsLoading || showSkeleton ? (
              <SkeletonCard />
            ) : stationsError ? (
              <ErrorMessage message="ไม่สามารถโหลดข้อมูลสถานีได้" />
            ) : !stations?.stations || stations.stations.length === 0 ? (
              <NoData />
            ) : (
              stations.stations.map((station) => (
                <CardAirQualityOutdoor key={station.stationID} data={station} />
              ))
            )
          ) : dataLoading ? (
            <SkeletonCard />
          ) : dataError ? (
            <ErrorMessage message="ไม่สามารถโหลดข้อมูลคุณภาพอากาศได้" />
          ) : !aqiData || Array.isArray(aqiData) ? (
            <NoData />
          ) : (
            aqiData && !Array.isArray(aqiData) && 'stationID' in aqiData && (
              <CardAirQualityOutdoor data={aqiData} />
            )
          )
        ) : (
          <CardRenderer pathname={location.pathname} />
        )}
      </div>
    </div>
  )
}

export default Main