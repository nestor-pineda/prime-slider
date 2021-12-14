import { Component, OnInit } from '@angular/core';
import { CardsModel } from './model/myModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public cardsModel: CardsModel;
  constructor() {
    this.cardsModel = {
      cards: [
        {
          img: {
            src: 'https://picsum.photos/360',
            alt: 'Just some reandom img',
          },
          title: 'This is the title1',
          text: 'Some text',
        },
        {
          img: {
            src: 'https://picsum.photos/360?grayscale',
            alt: 'Just some reandom img',
          },
          title: 'This is the title2',
          text: 'Some text',
        },
      ],
    };
  }
  ngOnInit(): void {}
}
