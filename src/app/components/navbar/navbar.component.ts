import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  showMenue = true;


  toggleShowMenue() {
    this.showMenue = !this.showMenue;
    console.log(this.showMenue);
  }

  OnInit() {
  }
}