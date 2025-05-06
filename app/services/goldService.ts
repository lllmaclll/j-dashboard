import axios from 'axios';
import { GOLD_API } from "@app/config/api";
import { GoldResponse } from "@app/types/gold";

export const fetchGoldPrice = async (): Promise<GoldResponse['response']> => {
  try {
    const res = await axios.get<GoldResponse>(GOLD_API);

    // ตรวจสอบว่ามีข้อมูล response หรือไม่
    if (!res?.data?.response?.price) {
      throw new Error('Invalid data structure from Gold API');
    }

    // คืนค่าข้อมูลที่ต้องการ
    return res.data.response; // จะได้ object ที่มี date, update_time, price
  } catch (err: unknown) {
    // ตรวจสอบประเภทของ error ก่อนการเข้าถึง message
    if (err instanceof Error) {
      throw new Error(err.message || 'Failed to fetch gold prices');
    } else {
      throw new Error('An unknown error occurred');
    }
  }
};
