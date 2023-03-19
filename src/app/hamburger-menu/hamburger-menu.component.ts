import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.css']
})
export class HamburgerMenuComponent implements OnInit {

  menuOpen = false;

  constructor() { }

  ngOnInit(): void {
    this.menuOpen = false;
    }

  toggleNavbar() {
    this.menuOpen = !this.menuOpen;
  }

}
