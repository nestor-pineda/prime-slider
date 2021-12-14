import { Component, Input, OnInit } from '@angular/core';
import { iCard } from '../../model/myModel';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() public card!: iCard;
  constructor() {}

  ngOnInit(): void {}
}
