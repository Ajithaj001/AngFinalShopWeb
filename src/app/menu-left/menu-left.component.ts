import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-left',
  templateUrl: './menu-left.component.html',
  styleUrls: ['./menu-left.component.scss']
})
export class MenuLeftComponent implements OnInit {

  isMenuOpened: boolean=false;
  isOpenMenu: boolean=false; 
  isOpenMenuOne :boolean= false;
  
  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(){
    this.isMenuOpened = !this.isMenuOpened;
  }

  toggleMenuOne(){
    this.isOpenMenu = !this.isOpenMenu;
  }
  toggleMenuwo(){
    this.isOpenMenuOne = !this.isOpenMenuOne;

  }
 

}
