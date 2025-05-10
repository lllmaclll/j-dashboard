export interface AqiRoom {
    aqiroom: {
      AQIStation: number;
      TempValue: number;
      HumValue: number;
    };
  }
  
  export interface AqiRoomResponse {
    response: {
      AQIStation: number;
      TempValue: number;
      HumValue: number;
    };
  }