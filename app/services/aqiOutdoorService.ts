// Library
import axios from "axios";

// Config
import { AQI_API_OUTDOOR } from "@config/api";

// Types
import { AQIOutdoorResponse, MultiStationResponse } from "@app/types/aqi-outdoor";

export const fetchAQIOutdoorAllStations = async (): Promise<MultiStationResponse> => {
  try {
    const { data } = await axios.get(AQI_API_OUTDOOR);
    return { stations: data.stations };
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error("Failed to fetch AQI stations");
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};

export const fetchAQIOutdoorByStation = async (stationID: string): Promise<AQIOutdoorResponse> => {
  try {
    // const { data } = await axios.get(`${AQI_API_OUTDOOR}/station?stationID=${stationID}`);
    const { data } = await axios.get(`${AQI_API_OUTDOOR}`, {
      params: { stationID }
    });
    return data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(`Failed to fetch AQI data for station ${stationID}`);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};
