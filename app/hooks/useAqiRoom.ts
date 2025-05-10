// src/hooks/useAqiRoom.ts
import { useEffect, useState } from 'react'
import { fetchAqiRoom } from '@app/services/aqiRoomService'
import { AqiRoomResponse } from '@app/types/aqi-room'

export const useAqiRoom = () => {
  const [aqiRoomData, setAqiRoomData] = useState<AqiRoomResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      try {
        const res = await fetchAqiRoom()
        setAqiRoomData(res)
      } catch (err: unknown) {
        console.error('AqiRoom API error:', err)
        setError(err instanceof Error ? err.message : 'An unknown error occurred')
      } finally {
        setLoading(false)
      }
    }

    // เรียกใช้งานครั้งแรก
    load()

    // ทำการ fetch ทุก 5 วินาที
    const intervalId = setInterval(load, 5000)

    // Cleanup เมื่อ component unmount
    return () => clearInterval(intervalId)
  }, [])

  return { aqiRoomData, loading, error }
}
