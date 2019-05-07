import { Component, OnInit } from '@angular/core';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name: String;
  description: String;
  imageLink: String;

  teamDescriptions = {
    timFace: [
      'Timothy Passmore, PhD', 
      'SAPANA (Strategies for Aerospace Policy and Norm Adoption) is a student research team at the University of Colorado Boulder, brought together as part of the Department of Defense’s Designing for Defense program. Our collective expertise include aerospace engineering, mechanical engineering, political science, economics, and business. The team includes two recent PhD graduates, three Master’s students, and two undergraduate students.',
      '../../assets/tim.jpg'
    ],
    akhilFace: [
      'Akhil Rao, PhD', 
      'New problems require new solutions, and old problems need fresh perspective. SAPANA is a student-based research consultancy firm offering expert insights into current and future problems relating to space. Our expertise spans aerospace and mechanical engineering, political science, economics, computer science, and business. We are independent, inquisitive, and dedicated to excellence.',
      '../../assets/akhil.png'
    ],
    danielFace: [
      'Daniel Scott', 
      'Daniel is a right proper lad',
      '../../assets/daniel.jpg'
    ],
    britneeFace: [
      'Britnee Leopold', 
      'Britnee is a right proper lad',
      '../../assets/britnee.jpg'
    ],
    mattFace: [
      'Matt Roberts', 
      'Matt is a right proper lad',
      '../../assets/matt.jpg'
  ],
    kimFace: [
      'Kimberly DeVore', 
      'Kim is a right proper lad',
      '../../assets/kim.jpg'
    ],
    meerFace: [
      'Meer Baker', 
      'Meer is a right proper lad',
      '../../assets/meer.jpg'
  ],

}

  constructor() { }

  ngOnInit() {
  }

  downCarrotPressed() {
    var target = document.getElementById('about_elem');
    target.scrollIntoView({behavior: "smooth", block: "start"})
  }

  returnButton() {
    var x = document.getElementById("headshotsCont")
    x.classList.toggle('isPopUp');

    var target = document.getElementById('modall');
    target.classList.toggle('open');
  }

  personPressed(person) {
    this.name = this.teamDescriptions[person][0]
    this.description = this.teamDescriptions[person][1]
    this.imageLink = this.teamDescriptions[person][2]

    var x = document.getElementById("headshotsCont")
    x.classList.toggle('isPopUp');

    var target = document.getElementById('modall');
    target.classList.toggle('open');
  }
}
