import { Component, OnInit } from '@angular/core';
// import {HomeComponent} from '../home/home.component';

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
      link: 'home_elem',
      selected: false
    },
    {
      name: 'About',
      link: 'about_elem',
      selected: false
    },
    {
      name: 'Research',
      link: 'research_elem',
      selected: false
    },
    {
      name: 'Contact',
      link: 'contact_elem',
      selected: false
    }
  ];
  constructor() { }
  ngOnInit() {
  }

   

  scroll(action, target) {

    var scrollTimeout: any;
    addEventListener('scroll', function(e) {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(function() {
        action.selected = false;
      }, 100);
    }); 

    this.menuActions.forEach(element => {
      element.selected = false;
    });

    action.selected = true;
    var el = document.getElementById(target);
    el.scrollIntoView({behavior: "smooth", block: "start"})

    
  }
}
