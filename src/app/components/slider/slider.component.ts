import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  items: Array<any> = [];
  constructor() {
    this.items = [
      { name: 'https://picsum.photos/200' },
      { name: 'https://picsum.photos/200' },
      { name: 'https://picsum.photos/200' },
      { name: 'https://picsum.photos/200' },
      { name: 'https://picsum.photos/200' },
      { name: 'https://picsum.photos/200' },
      { name: 'https://picsum.photos/200' },
      { name: 'https://picsum.photos/200' },
      { name: 'https://picsum.photos/200' },
      { name: 'https://picsum.photos/200' },
      { name: 'https://picsum.photos/200' },
      { name: 'https://picsum.photos/200' },
    ];
  }

  ngOnInit(): void {}
}
