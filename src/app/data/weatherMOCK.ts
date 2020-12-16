import {CityWeather} from './CityWeather';

export const weatherConditions: CityWeather[] = [
  {
    location: {
      name: 'London',
      region: 'City of London, Greater London',
      country: 'United Kingdom',
      lat: 51.52,
      lon: -0.11,
      tz_id: 'Europe/London',
      localtime_epoch: 1608072489,
      localtime: '2020-12-15 22:48'
    },
    current: {
      last_updated_epoch: 1608071410,
      last_updated: '2020-12-15 22:30',
      temp_c: 8.0,
      temp_f: 46.4,
      is_day: 0,
      condition: {
        text: 'Clear',
        icon: '//cdn.weatherapi.com/weather/64x64/night/113.png',
        code: 1000
      },
      wind_mph: 4.3,
      wind_kph: 6.8,
      wind_degree: 130,
      wind_dir: 'SE',
      pressure_mb: 1009.0,
      pressure_in: 30.3,
      precip_mm: 0.0,
      precip_in: 0.0,
      humidity: 87,
      cloud: 0,
      feelslike_c: 6.0,
      feelslike_f: 42.7,
      vis_km: 10.0,
      vis_miles: 6.0,
      uv: 1.0,
      gust_mph: 11.2,
      gust_kph: 18.0
    }
  }
];
