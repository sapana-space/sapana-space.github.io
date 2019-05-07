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
      'Tim Passmore is a political scientist who studies American foreign policy, civil and interstate conflict, and international law. His current research addresses the role played by intergovernmental organizations in conflict reduction. He has taught university courses for the last 9 years and will begin as an Assistant Professor of International Studies at the Virginia Military Institute in Fall 2019.',
      '../../assets/tim.jpg'
    ],
    akhilFace: [
      'Akhil Rao, PhD', 
      'Akhil Rao is an economist working on the economic management of low-Earth orbit. His research focuses on the use of economic policy to control collision risk and debris growth, with an eye to preventing Kessler Syndrome in valuable orbits. He will be an Assistant Professor of Economics at Middlebury College starting Fall 2019.',
      '../../assets/akhil.png'
    ],
    danielFace: [
      'Daniel Scott', 
      'Daniel Scott is a computer science major and business minor at the University of Colorado - Boulder. He is currently employed by the Department of Computer Science at CU as a course assistant. In the summer, he will be a software engineer intern at VISA where he will work primarily on VIP Middleware Development.',
      '../../assets/daniel.jpg'
    ],
    britneeFace: [
      'Britnee Leopold', 
      'Britnee Leopold is an undergraduate aerospace engineering student working towards a master’s degree. She is experienced as a researcher, project lead, test engineer, and field engineer. Britnee is currently employed as an intern by MD5 and is working to help solve national security problems in innovative ways.',
      '../../assets/britnee.jpg'
    ],
    mattFace: [
      'Matt Roberts', 
      'Matt Roberts is a Mechanical Engineering major at the University of Colorado - Boulder. He is an AFROTC Cadet who has earned his Pilot slot and will commission as a 2nd Lt. in May 2020. This summer he will be working for NOAA on the FIREX-AQ project which uses airborne instruments to analyze wildfire smoke composition.',
      '../../assets/matt.jpg'
  ],
    kimFace: [
      'Kimberly DeVore', 
      'Kim is a mechanical engineering master’s student. She is currently employed at the National Institute of Standards and Technology (NIST) where she performs a wide variety of functions.',
      '../../assets/kim.jpg'
    ],
    meerFace: [
      'Meer Baker', 
      'Meer Baker is an aerospace engineering student focusing on astrodynamics and controls. He is currently working in the Bioastronautics lab modeling computer simulated landings. His research interests are in Space debris and interplanetary trajectories.',
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
