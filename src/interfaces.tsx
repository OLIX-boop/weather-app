import {
  CloudyDay1,
  CloudyNight1,
  Rainy4,
  Day,
  Rainy2,
  Rainy5,
  Snowy1,
  Snowy5,
  Thunder,
  Rainy7,
  Rainy6,
  Snowy6,
  Night,
} from "./assets/animated/_icons";

interface weather {
  day: string;
  night: string;
  desc: string;
}

interface coords {
  latitude: number;
  longitude: number;
}

interface geoCodeItem {
  latitude: number;
  longitude: number;
}

interface geoCode {
  data: Array<geoCodeItem>;
}

interface weather_data {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;

  timezone: string;
  timezone_abbreviation: string;
  elevation: number;

  current_units: {
    time: string;
    interval: string;
    temperature_2m: string;
    wind_speed_10m: string;
    weather_code: string;
    relative_humidity_2m: string;
    is_day: string;
    surface_pressure: string;
    cloud_cover: string;
  };

  current: {
    time: string;
    interval: number;
    temperature_2m: number;
    wind_speed_10m: number;
    weather_code: number;
    relative_humidity_2m: number;
    is_day: number;
    surface_pressure: number;
    cloud_cover: number;
  };

  daily: {
    time: Array<string>;
    weather_code: Array<number>;
    temperature_2m_max: Array<number>;
    temperature_2m_min: Array<number>;
  };

  hourly_units: {
    time: string;
    temperature_2m: string;
  };

  hourly: {
    time: Array<string>;
    temperature_2m: Array<number>;
  };
}

const conversion: { [key: number]: weather } = {
  0: { day: Day, night: Night, desc: "Clear sky" },
  1: { day: CloudyDay1, night: CloudyNight1, desc: "Few Clouds" },
  2: { day: CloudyDay1, night: CloudyNight1, desc: "Few Clouds" },
  3: { day: CloudyDay1, night: CloudyNight1, desc: "Few Clouds" },
  45: { day: CloudyDay1, night: CloudyNight1, desc: "Clouds" },
  48: { day: CloudyDay1, night: CloudyNight1, desc: "Clouds" },
  51: { day: Rainy2, night: Rainy4, desc: "Clouds" },
  53: { day: Rainy2, night: Rainy4, desc: "Clouds" },
  55: { day: Rainy2, night: Rainy4, desc: "Clouds" },
  56: { day: Rainy7, night: Rainy7, desc: "Freezing Clouds" },
  57: { day: Rainy7, night: Rainy7, desc: "Freezing Clouds" },
  61: { day: Rainy5, night: Rainy5, desc: "Rain" },
  63: { day: Rainy5, night: Rainy5, desc: "Rain" },
  65: { day: Rainy5, night: Rainy5, desc: "Rain" },
  66: { day: Rainy7, night: Rainy7, desc: "Freezing Rain" },
  67: { day: Rainy7, night: Rainy7, desc: "Freezing Rain" },
  71: { day: Snowy1, night: Snowy5, desc: "Snow" },
  73: { day: Snowy1, night: Snowy5, desc: "Snow" },
  75: { day: Snowy1, night: Snowy5, desc: "Snow" },
  77: { day: Snowy5, night: Snowy5, desc: "Snow grains" },
  80: { day: Rainy6, night: Rainy6, desc: "Heavy rain" },
  81: { day: Rainy6, night: Rainy6, desc: "Heavy rain" },
  82: { day: Rainy6, night: Rainy6, desc: "Heavy rain" },
  85: { day: Snowy6, night: Snowy6, desc: "Heavy Snowing" },
  86: { day: Snowy6, night: Snowy6, desc: "Heavy Snowing" },
  95: { day: Thunder, night: Thunder, desc: "Thunder" },
  96: { day: Thunder, night: Thunder, desc: "Thunder" },
  99: { day: Thunder, night: Thunder, desc: "Thunder" },
};

export type { weather_data, coords, geoCode };
export { conversion };
