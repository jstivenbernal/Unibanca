import { Component, OnInit, ViewEncapsulation } from '@angular/core';

declare var JQUERY: any;
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $().UItoTop({ easingType: 'easeOutQuart' });
  }

}
