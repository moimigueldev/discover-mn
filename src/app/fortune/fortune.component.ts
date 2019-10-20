import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fortune',
  templateUrl: './fortune.component.html',
  styleUrls: ['./fortune.component.scss']
})
export class FortuneComponent implements OnInit {

  slides = [
    {img: '../../assets/images/logos/target.jpg'},
    {img: '"../../assets/images/logos/lando-lakes.png'},
    {img: '../../assets/images/logos/bestbuy.png'},
    {img: '../../assets/images/logos/thivent.png'},
    {img: '../../assets/images/logos/3M.png'},
    {img: '../../assets/images/logos/general-mills.jpg'},
    {img: '../../assets/images/logos/uhg.jpg'},
    {img: '../../assets/images/logos/usb.png'},
    {img: '../../assets/images/logos/saint-jude.png'},
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
