import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fortune',
  templateUrl: './fortune.component.html',
  styleUrls: ['./fortune.component.scss']
})
export class FortuneComponent implements OnInit {

  slides = [
    {img: '../../assets/images/logos/target.jpg', class: 'img-fluid mx-auto p-4'},
    {img: '"../../assets/images/logos/lando-lakes.png',  class: 'img-fluid mx-auto p-4'},
    {img: '../../assets/images/logos/bestbuy.png',  class: 'img-fluid mx-auto p-4'},
    {img: '../../assets/images/logos/thivent.png',  class: 'img-fluid mx-auto p-4'},
    {img: '../../assets/images/logos/3M.png',  class: 'img-fluid mx-auto p-4'},
    {img: '../../assets/images/logos/general-mills.jpg',  class: 'img-fluid mx-auto p-4'},
    {img: '../../assets/images/logos/uhg.jpg',  class: 'img-fluid mx-auto p-4 uhg'},
    {img: '../../assets/images/logos/usb.png',  class: 'img-fluid mx-auto p-4'},
    {img: '../../assets/images/logos/saint-jude.png',  class: 'img-fluid mx-auto p-4 st-jude'},
  ];
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite:true,
    speed:1000,
    dots: true
  };

//   $(".slider").slick({
//     arrows:true,
//     infinite: true,
//     slideToShow:1,
//     slideToScroll:1,
//     speed:1000,
//     dots:true
// });
  constructor() { }

  ngOnInit() {

  }

}
