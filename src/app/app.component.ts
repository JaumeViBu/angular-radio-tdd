import { Component } from '@angular/core';
import axios from 'axios';
import Radio from 'src/model/Radio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showHeader: boolean = false;
  radioList: Array<Radio> = [];
  async fetchRadioList() {
    const res = await axios.get(
      'http://95.179.139.106/json/stations/search?name=metalcore'
    );
    const radios = res.data;
    const newList = [];
    for (let radio of radios) {
      newList.push(new Radio(radio.stringuuid, radio.name));
    }
    this.radioList = newList;
  }
  toogleHeader() {
    this.showHeader = !this.showHeader;
  }
}
