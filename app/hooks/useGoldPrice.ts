// Library
import { useEffect, useRef, useState } from "react";

// Services
import { fetchGoldPrice } from "@services/goldService";

// Types
import { GoldResponse } from "@app/types/gold";

export const useGoldPrice = () => {
  const [data, setData] = useState<GoldResponse["response"] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const prevDataRef = useRef<GoldResponse["response"] | null>(null); // ใช้ useRef เพื่อเก็บข้อมูลก่อนหน้า

  useEffect(() => {
    const fetchGold = async () => {
      try {
        const json = await fetchGoldPrice();

        // เช็คว่า json ที่ได้รับใหม่แตกต่างจากข้อมูลเก่าหรือไม่
        if (JSON.stringify(json) !== JSON.stringify(prevDataRef.current)) {
          setData(json);
          prevDataRef.current = json; // เก็บข้อมูลใหม่
        }
      } catch (err: unknown) {
        console.error("Gold API error:", err);
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    // Fetch initial data
    fetchGold();

    // Set interval to refetch every 1 hour (3600000 milliseconds)
    const intervalId = setInterval(fetchGold, 3600000);

    // Clear interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run only once on mount

  return { data, loading, error };
};
