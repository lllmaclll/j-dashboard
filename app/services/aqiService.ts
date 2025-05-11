// Library
import axios from "axios";

// Config
import { AQI_API } from "@config/api";

// Types
import { AQIResponse, MultiStationResponse } from "@app/types/aqi";

export const fetchAllStationsAQI = async (): Promise<MultiStationResponse> => {
  try {
    const { data } = await axios.get(AQI_API);
    return { stations: data.stations };
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error("Failed to fetch AQI stations");
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};

export const fetchAQIByStation = async (stationID: string): Promise<AQIResponse> => {
  try {
    const { data } = await axios.get(`${AQI_API}?stationID=${stationID}`);
    return data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(`Failed to fetch AQI data for station ${stationID}`);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};
