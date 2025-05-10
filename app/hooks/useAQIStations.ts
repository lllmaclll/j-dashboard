// src/hooks/useAQIStations.ts
import { useEffect, useRef, useState } from 'react'
import { fetchAllStationsAQI } from '../services/aqiService'
import { MultiStationResponse } from '@app/types/aqi'

export const useAQIStations = () => {
  const [stations, setStations] = useState<MultiStationResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const prevStationsRef = useRef<MultiStationResponse | null>(null) // ใช้ useRef เพื่อเก็บข้อมูลก่อนหน้า

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      try {
        const data = await fetchAllStationsAQI()
        
                // เช็คว่า data ที่ได้รับใหม่แตกต่างจากข้อมูลเก่าหรือไม่
        if (JSON.stringify(data) !== JSON.stringify(prevStationsRef.current)) {
          setStations(data)
          prevStationsRef.current = data // เก็บข้อมูลใหม่
        }
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
