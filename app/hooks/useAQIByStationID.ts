// src/hooks/useAQI.ts
import { useEffect, useState } from 'react'
import { fetchAllStationsAQI, fetchAQIByStation } from '../services/aqiService'
import { AQIResponse, MultiStationResponse } from '@app/types/aqi'

export const useAQIByStationID = (stationID?: string) => {
  const [aqiData, setAqiData] = useState<MultiStationResponse | AQIResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      try {
        const data = stationID
          ? await fetchAQIByStation(stationID)
          : await fetchAllStationsAQI()
        setAqiData(data)
      } catch (err: unknown) {
        console.error('AQI API error:', err)
        setError(err instanceof Error ? err.message : 'An unknown error occurred')
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [stationID])

  return { aqiData, loading, error }
}
