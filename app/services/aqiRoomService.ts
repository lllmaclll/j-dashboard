// Library
import axios from "axios";

// Config
import { AQI_ROOM_API } from "@config/api";

// Types
import { AqiRoomResponse } from "@app/types/aqi-room";

export const fetchAqiRoom = async (): Promise<AqiRoomResponse> => {
  try {
    const res = await axios.get<AqiRoomResponse>(AQI_ROOM_API);
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
