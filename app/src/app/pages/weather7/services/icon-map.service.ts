import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconMapService {
  sunny = 'assets/imgs/sunny.png';
  cloudy = 'assets/imgs/cloudy.png';
  lightRain = 'assets/imgs/rain.png';
  shower = 'assets/imgs/shower.png';
  sunnyThunderStorm = 'assets/imgs/partial-tstorm.png';
  thunderStorm = 'assets/imgs/tstorm.png';
  fog = 'assets/imgs/fog.png';
  snow = 'assets/imgs/snow.png';
  unknown = 'assets/imgs/unknown.png';
}
