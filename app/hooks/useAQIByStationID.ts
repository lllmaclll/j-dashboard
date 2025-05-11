// Library
import { useEffect, useRef, useState } from "react";

// Services
import { fetchAQIByStation } from "@services/aqiService";

// Types
import { AQIResponse, MultiStationResponse } from "@app/types/aqi";

export const useAQIByStationID = (stationID: string) => {
  const [aqiData, setAqiData] = useState<MultiStationResponse | AQIResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const prevAqiDataRef = useRef<MultiStationResponse | AQIResponse | null>(null); // ใช้ useRef เพื่อเก็บข้อมูลก่อนหน้า

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const data = await fetchAQIByStation(stationID);

        // เช็คว่าข้อมูลใหม่แตกต่างจากข้อมูลก่อนหน้าไหม
        if (JSON.stringify(data) !== JSON.stringify(prevAqiDataRef.current)) {
          setAqiData(data);
          prevAqiDataRef.current = data; // เก็บข้อมูลใหม่
        }
      } catch (err: unknown) {
        console.error("AQI API error:", err);
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [stationID]); // เมื่อ stationID เปลี่ยน, จะทำการเรียก fetch ข้อมูลใหม่

  return { aqiData, loading, error };
};
