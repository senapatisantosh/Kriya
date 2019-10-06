import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-htc-home',
  templateUrl: './htc-home.component.html',
  styleUrls: ['./htc-home.component.css']
})
export class HtcHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function () {
      // Transition effect for navbar 
      $(window).scroll(function () {
        if ($(".cb").length) {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('solid');
          } else {
            $('.navbar').removeClass('solid');
          }
        }
      });
    });


    var typed = new Typed(".typing", {
      strings: ["Innovative", "Creative", "Ingenious", "Original"],
      loop: true,
      typeSpeed: 40,
      backSpeed: 40
    });
  }

}
