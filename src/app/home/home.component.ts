import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
/* Please ❤ this if you like it! */


(function($) { "use strict";


  


//---------------------------------------------------------
// var $st = $('.pagination');
// var $slickEl = $('.center');

$('.center').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  var i = (currentSlide ? currentSlide : 0) + 1;
  $('.pagination').text(i + ' of ' + slick.slideCount);
});

(<any>$('.center')).slick({
  centerMode: true,
  centerPadding: '200px',
  slidesToShow: 1,
  focusOnSelect: true,
  dots: false,
  infinite: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

//---------------------------------------------------------
})(jQuery); 
  }

}
