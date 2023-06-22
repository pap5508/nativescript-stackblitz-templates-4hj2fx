import { Injectable } from '@angular/core'

import { Item } from './item'



import { ApplicationSettings, isAndroid, Device } from '@nativescript/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { setString, getString } from '@nativescript/core/application-settings';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(
    private http: HttpClient,
  ) {
    this._backClickChatNotificationSubject = new Subject();

  }

  private _backClickChatNotificationSubject = new Subject<boolean>();

  public get backClickChatNotificationSubject(): Subject<boolean> {
    return this._backClickChatNotificationSubject;
  }

  private items = new Array<Item>(
    { id: 1, name: 'Ter Stegen', role: 'Goalkeeper' },
    { id: 3, name: 'Piqué', role: 'Defender' },
    { id: 4, name: 'I. Rakitic', role: 'Midfielder' },
    { id: 5, name: 'Sergio', role: 'Midfielder' },
    { id: 6, name: 'Denis Suárez', role: 'Midfielder' },
    { id: 7, name: 'Arda', role: 'Midfielder' },
    { id: 8, name: 'A. Iniesta', role: 'Midfielder' },
    { id: 9, name: 'Suárez', role: 'Forward' },
    { id: 10, name: 'Messi', role: 'Forward' },
    { id: 11, name: 'Neymar', role: 'Forward' },
    { id: 12, name: 'Rafinha', role: 'Midfielder' },
    { id: 13, name: 'Cillessen', role: 'Goalkeeper' },
    { id: 14, name: 'Mascherano', role: 'Defender' },
    { id: 17, name: 'Paco Alcácer', role: 'Forward' },
    { id: 18, name: 'Jordi Alba', role: 'Defender' },
    { id: 19, name: 'Digne', role: 'Defender' },
    { id: 20, name: 'Sergi Roberto', role: 'Midfielder' },
    { id: 21, name: 'André Gomes', role: 'Midfielder' },
    { id: 22, name: 'Aleix Vidal', role: 'Midfielder' },
    { id: 23, name: 'Umtiti', role: 'Defender' },
    { id: 24, name: 'Mathieu', role: 'Defender' },
    { id: 25, name: 'Masip', role: 'Goalkeeper' }
  )

  // Register device Id for Push notification
  public registerDeviceId(): Promise<any> {
    let headers = this.getHeaders();
    let url = "xxxxxxxxxxxxxxxx";
    // console.log(`Registering device id ${deviceId}`);
    return this.http.post(
      url, {
      deviceId: getString("deviceID"),
      deviceType: 0
    }, {
      headers: headers
    })
      .toPromise()
      .then(response => response)
      .catch(this.handleErrors);
  }

  // Request header
  private getHeaders() {
    return new HttpHeaders({
      "Content-Type": "application/json",
      // "Authorization": "Bearer " + "eyxJ0exXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlBSZWw3WjBSMm8wcnZOdGxWZzA0SmpZR08tVSIsImtpZCI6IlBSZWw3WjBSMm8wcnZOdGxWZzA0SmpZR08tVSJ9.eyJpc3MiOiJodHRwOi8vaG9zdC5iZWdpcy5kZS9IaWViZXJXZWJfVGVzdCIsImF1ZCI6Imh0dHA6Ly9ob3N0LmJlZ2lzLmRlL0hpZWJlcldlYl9UZXN0L3Jlc291cmNlcyIsImV4cCI6MTY4NzQ0NzQ4OCwibmJmIjoxNjg3NDExNDg4LCJjbGllbnRfaWQiOiJjb2RlLmZsb3cud2ViIiwic2NvcGUiOlsib3BlbmlkIiwicmVhZCIsInByb2ZpbGUiLCJkb2N1bWVudEFwaSIsIm9mZmxpbmVfYWNjZXNzIl0sInN1YiI6Ii9Vc2VyLlVzZXJOYW1lPVRhcmVrLlNib3VhaSIsImF1dGhfdGltZSI6MTY4NzQxMTQ4NywiaWRwIjoiaWRzcnYiLCJjbGllbnQiOiIwIiwiY3VzdG9tZXIiOiIwIiwiZGlzcGxheW5hbWUiOiJUYXJlayBTYm91YWkgLSAiLCJlbWFpbCI6InRlc3QwMkBoaWViZXJ0ZXN0LmJlZ2lzLmRlIiwibmFtZSI6IlRhcmVrLlNib3VhaSIsInByaW5jaXBhbCI6IjAiLCJyb2xlIjpbIkFkbWluaXN0cmF0b3IiLCJFRElCX0FwcF9DYXRlZ29yeV9NaXRhcmJlaXRlciIsIkVESUJfQXBwX0NhdGVnb3J5X1dvcmtmbG93w5xiZXJzaWNodCIsIkJyb2FkY2FzdF9Nb2RlcmF0b3IiLCJNaXRhcmJlaXRlciIsIkVESUJfQXBwX01pdGFyYmVpdGVya2FydGUiLCJFRElCX0FwcF9XZWlobmFjaHRzZ3V0c2NoZWluIiwiQ29udHJpYnV0b3IiLCJFRElCX0FwcF9QYXlyb2xsIiwiRURJQl9BcHBfRW1wbG95ZWUiLCJFRElCX0FwcF9NYWlsIiwiRURJQl9BcHBfQ2hhdF9BbnplaWdlbiIsIk5ld3NfTW9kZXJhdG9yIiwiUmVjcnVpdGluZyJdLCJ1c2VybmFtZSI6IlRhcmVrLlNib3VhaSIsInBlcnNuciI6IjAiLCJ3YXRlcm1hcmsiOiJ1c2VybmFtZSIsIlRlbGVmb24iOiIiLCJkeW5hbWljU2hhcmVGaWx0ZXIiOiJsb2NhdGlvbiIsImxvY2F0aW9uIjoiQmV0cmllYnN0w6R0dGU6ICIsIm1hbmRhbnQiOiIwIiwiaW50cmFuZXQiOiJUcnVlIiwicGFzc3dvcmRFeHBpcmVkVXRjIjoiMjAyMy0wOC0yM1QxMDo0OTozNC4wMDAwMDAwWiIsImFtciI6WyJwYXNzd29yZCJdfQ.drMzpjRvBriKQJj-zB26koEy2T2ze2z2NWWsFA59f7dd7-B74x-ZEKrEh0nY7_HgRboSHldfOTPbL0m57eOL0FKE35T4Ayek1LX4MO7SDdTLUAK5C4JtBWhGq9BJJHfX6hfTgBWvin6DQZ797Av4rOF3HBjXUiGD8DYO59kFA6wzO5WxAZ6VGnL0gBx08aMnIphvjFDallKBWLWeRSwXmoXOoB5d0bqcCqu1iElAPQ3-viBCHKKF3ojUPEkwFdR03fa8Ud0_nYaCIcrLOAQYK1TahlFuLervwstJ1Nksp8wBE33Nmd13VyswnK6nPVXKK1YW3F95SDdIIPfUIjd3Ew",
    });
  }

  // handle errors
  private handleErrors(error: any): Promise<any> {
    console.log("Error in user service: " + JSON.stringify(error));
    return Promise.reject(error.message || error);
  }


  getItems(): Array<Item> {
    return this.items
  }

  getItem(id: number): Item {
    return this.items.filter((item) => item.id === id)[0]
  }
}
