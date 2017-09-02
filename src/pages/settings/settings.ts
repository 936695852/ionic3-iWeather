import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { HomePage } from "../home/home";

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  city:string;
  state:string;

  constructor(
    public navCtrl: NavController, 
    private storage: Storage,
  ) {
    this.storage.get('localtion').then((val) => {
      if (val !== null) {
        let localtion = JSON.parse(val);
        this.city = localtion.city;
        this.state = localtion.state;
      } else {
        this.city = '西安',
        this.state = 'China'
      }
    })
  }
  
  saveForm() {
    let localtion = {
      city: this.city,
      state: this.state
    }
    this.storage.set('localtion', JSON.stringify(localtion));
    this.navCtrl.push(HomePage);
  }
}
