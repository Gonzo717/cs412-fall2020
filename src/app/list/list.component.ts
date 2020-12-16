import { Component, OnInit } from '@angular/core';
import { CityWeather } from '../data/CityWeather';
import { weatherConditions} from '../data/weatherMOCK';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  title = 'Weather API Mock Data';
  weatherConditions: CityWeather[] = weatherConditions;


  // tslint:disable-next-line:typedef
  onClickMe() {
    const currText = document.getElementById('printable');
    currText.innerHTML = String(weatherConditions[0].current.temp_f);
  }
}
