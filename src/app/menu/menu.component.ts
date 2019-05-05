import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  // 'selected' should be marked to true if the section scrolls into view
  menuActions: any[] = [
    {
      name: 'Home',
      link: 'home',
      selected: true
    },
    {
      name: 'About',
      link: 'about',
      selected: false
    },
    {
      name: 'Research',
      link: 'previous_work',
      selected: false
    },
    {
      name: 'Contact',
      link: 'contact',
      selected: false
    }
  ];
  constructor() { }
  ngOnInit() {
  }
}
