import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginClick(): void {
    alert("Le service de comptes n'a pas été implémenté");
  }
}
