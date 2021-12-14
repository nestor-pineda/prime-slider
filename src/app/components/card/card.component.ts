import { Component, Input, OnInit } from '@angular/core';
import { CardsModel } from '../../model/myModel';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() public card!: CardsModel;
  constructor() {}

  ngOnInit(): void {}
}
