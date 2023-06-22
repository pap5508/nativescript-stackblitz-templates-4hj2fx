import { Component, OnInit } from '@angular/core'
import { Carousel, CarouselItem } from '@nstudio/nativescript-carousel';
import { registerElement } from '@nativescript/angular';
import { ApplicationSettings } from '@nativescript/core';
registerElement('Carousel', () => Carousel);
registerElement('CarouselItem', () => CarouselItem);
import { firebase } from '@nativescript/firebase';

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.init().then(
      (f) => {
        //only add callback on firebase first init
        firebase.addOnPushTokenReceivedCallback(
          this.onPushTokenRecieved
        );
        /* if (isAndroid) {
            const that = this;
            firebase.addOnMessageReceivedCallback(
                that.onMessageReceived.bind(that)
            );
        } */
        console.log("init firebase...");
      },
      (error) => {
        console.log(error);
      }
    );
  }
  public onPushTokenRecieved(deviceID) {
    var newDeviceId = JSON.stringify(deviceID);
    var deviceId: string;
    deviceId = newDeviceId.toString().replace(/"/g, "");
    console.log("onpushtokenrecevied:  " + deviceId);
    ApplicationSettings.setString("deviceID", deviceId);
  }


  onMessageReceived(notificationMessage) {
    // EDIBalert("App: ", "onMessageReceived called");
  }

  validatePermissionsResult(res) {
    for (let i = 0; i < res.length; i++) {
      if (typeof (res[i]) === 'object') {
        const keys = Object.keys(res[i]);
        for (let keysI = 0; keysI < keys.length; keysI++) {
          const key = keys[keysI];
          if (res[i][key] !== 'authorized') {
            throw 'Permission ' + key + ' not allowed: ' + res[i];
          }
        }
      }
      if (typeof (res[i]) === 'string') {
        if (res[i] !== 'authorized') {
          throw 'Permission not allowed: ' + res[i];
        }
      }
    }
  }
}
