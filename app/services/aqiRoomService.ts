import axios from 'axios';
import { AQIROOM_API } from "@app/config/api";
import { AqiroomResponse } from "@app/types/aqiroom";

export const fetchGoldPrice = async (): Promise<AqiroomResponse['response']> => {
  try {
    const res = await axios.get<AqiroomResponse>(AQIROOM_API);

    // ตรวจสอบว่ามีข้อมูล response หรือไม่
    if (!res?.data?.response?.TempValue) {
      throw new Error('Invalid data structure from Aqiroom API');
    }

    // คืนค่าข้อมูลที่ต้องการ
    return res.data.response; // จะได้ object ที่มี AQIStation, TempValue, HumValue
  } catch (err: unknown) {
    // ตรวจสอบประเภทของ error ก่อนการเข้าถึง message
    if (err instanceof Error) {
      throw new Error(err.message || 'Failed to fetch AQIStation');
    } else {
      throw new Error('An unknown error occurred');
    }
  }
};