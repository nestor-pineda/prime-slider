export interface CardsModel {
  cards: iCard[];
}

export interface iCard {
  img: Img;
  title: string;
  text: string;
}

export interface Img {
  src: string;
  alt: string;
}
