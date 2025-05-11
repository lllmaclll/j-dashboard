// ใช้ซ้ำได้สำหรับข้อมูลของแต่ละค่ามลพิษ
export interface PollutionData {
  color_id: string;
  aqi: string;
  value: string;
}

export interface AQIData {
  color_id: string;
  aqi: string;
  param: string;
}

export interface AQILastData {
  date: string;
  time: string;
  PM25: PollutionData;
  PM10: PollutionData;
  O3: PollutionData;
  CO: PollutionData;
  NO2: PollutionData;
  SO2: PollutionData;
  AQI: AQIData;
}

export interface AQIResponse {
  stationID: string;
  nameTH: string;
  nameEN: string;
  areaTH: string;
  areaEN: string;
  stationType: string;
  lat: string;
  long: string;
  forecast: any[]; // ถ้ามี structure ชัดเจนกว่านี้แนะนำให้แทนที่ `any`
  AQILast: AQILastData;
}

// สำหรับ response แบบหลายสถานี
export interface MultiStationResponse {
  stations: AQIResponse[];
}
