// src/hooks/useAQIStations.ts
import { useEffect, useState } from 'react'
import { fetchAllStationsAQI } from '../services/aqiService'
import { MultiStationResponse } from '@app/types/aqi'

export const useAQIStations = () => {
  const [stations, setStations] = useState<MultiStationResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      try {
        const data = await fetchAllStationsAQI()
        setStations(data)
      } catch (err: unknown) {
        console.error('AQI Stations API error:', err)
        setError(err instanceof Error ? err.message : 'An unknown error occurred')
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [])

  return { stations, loading, error }
}
