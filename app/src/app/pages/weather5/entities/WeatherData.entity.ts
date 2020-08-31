export class WeatherData {
  name: string;
  weather: Weather[];
  main: Main;
}

interface Weather {
  id: number,
  main: string,
  description: string,
  icon: string;
}

interface Main {
  humidity?: number,
  pressure?: number,
  temp: number,
  temp_max?: number,
  temp_min?: number
}
