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
      cards: {
        img: {
          src: 'https://picsum.photos/360',
          alt: 'Just some reandom img',
        },
        title: 'This is the title',
        text: 'Some text',
      },
    };
  }
  ngOnInit(): void {}
}
