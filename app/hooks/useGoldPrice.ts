import { fetchGoldPrice } from '@app/services/goldService'
import { useEffect, useState } from 'react'
import { GoldResponse } from "@app/types/gold";

export const useGoldPrice = () => {
  const [data, setData] = useState<GoldResponse['response'] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchGold = async () => {
      try {
        const json = await fetchGoldPrice()
        setData(json)
      } catch (err: unknown) {
        console.error('Gold API error:', err)
        setError(err instanceof Error ? err.message : 'An unknown error occurred')
      } finally {
        setLoading(false)
      }
    }

    // Fetch initial data
    fetchGold()

    // Set interval to refetch every 1 hour (3600000 milliseconds)
    const intervalId = setInterval(fetchGold, 3600000)

    // Clear interval when the component is unmounted
    return () => clearInterval(intervalId)
  }, []) // Empty dependency array to run only once on mount

  return { data, loading, error }
}
