import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyC29X79TOUWD7SMYVaaEKJ5f54-CCvGp2M",
      authDomain: "demoangular-shop.firebaseapp.com",
      databaseURL: "https://demoangular-shop.firebaseio.com",
      projectId: "demoangular-shop",
      storageBucket: "demoangular-shop.appspot.com",
      messagingSenderId: "164695854053",
      appId: "1:164695854053:web:9789035a32e50e3e2abd0c",
      measurementId: "G-VZET1CS27Z"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
