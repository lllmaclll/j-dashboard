// Library
import { useEffect, useRef, useState } from "react";

// Services
import { fetchAQIIndoor } from "@app/services/aqiIndoorService";

// Types
import { AQIIndoorResponse } from "@app/types/aqi-indoor";

export const useAQIIndoor = () => {
  const [aqiRoomData, setAqiRoomData] = useState<AQIIndoorResponse | null>(null);
  const [initialLoading, setInitialLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const prevAqiRoomDataRef = useRef<AQIIndoorResponse | null>(null); // เก็บค่าเดิม

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetchAQIIndoor();

        // ถ้า aqiRoomData ก่อนหน้านี้เหมือนกับข้อมูลใหม่ ก็ไม่อัปเดต state
        if (JSON.stringify(res) !== JSON.stringify(prevAqiRoomDataRef.current)) {
          setAqiRoomData(res);
          prevAqiRoomDataRef.current = res; // เก็บค่าปัจจุบัน
        }
      } catch (err: unknown) {
        console.error("AqiRoom API error:", err);
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setInitialLoading(false);
      }
    };

    // เรียกใช้งานครั้งแรก
    load();

    // ทำการ fetch ทุก 5 วินาที
    const intervalId = setInterval(load, 5000);

    // Cleanup เมื่อ component unmount
    return () => clearInterval(intervalId);
  }, []);

  return { aqiRoomData, initialLoading, error };
};
