// src/lib/api/weather.ts
export type WeatherData = {
  // あとで型定義
};

export async function getWeather(city: string): Promise<WeatherData> {
  throw new Error('getWeather not implemented yet');
  // あとで実装する（例: OpenWeatherMap API）
}
