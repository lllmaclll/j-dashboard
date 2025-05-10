export interface Aqiroom {
    aqiroom: {
      AQIStation: string;
      TempValue: string;
      HumValue: string;
    };
  }
  
  export interface AqiroomResponse {
    status: string;
    response: {
      AQIStation: string;
      TempValue: string;
      HumValue: string;
    };
  }