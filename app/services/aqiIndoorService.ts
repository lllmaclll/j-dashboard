// Library
import axios from "axios";

// Config
import { AQI_API_INDOOR } from "@config/api";

// Types
import { AQIIndoorResponse } from "@app/types/aqi-indoor";

export const fetchAQIIndoor = async (): Promise<AQIIndoorResponse> => {
  try {
    const res = await axios.get<AQIIndoorResponse>(AQI_API_INDOOR);
    // console.log('AqiRoom API response:', res);

    // คืนค่าข้อมูลที่ต้องการ
    return res.data; // จะได้ object ที่มี AQIStation, TempValue, HumValue
  } catch (err: unknown) {
    // ตรวจสอบประเภทของ error ก่อนการเข้าถึง message
    if (err instanceof Error) {
      throw new Error(err.message || "Failed to fetch AqiRoom");
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};
