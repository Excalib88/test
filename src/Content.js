import React from 'react';
import ContentFunc from './ContentFunc';

const cardItems = [
  {
    id: 1,
    topTitle: 'Сказочное заморское явство',
    title: 'Нямушка',
    eat: 'с фуа-гра',
    optionsCount: '10',
    optionsGift: 'мышь в подарок',
    weight: '0,5',
    description: 'Печень утки разварная с артишоками.',
    available: true
  },
  {
    id: 2,
    topTitle: 'Сказочное заморское явство',
    title: 'Нямушка',
    eat: 'с рыбой',
    optionsCount: '40',
    optionsGift: '2 мыши в подарок',
    weight: '2',
    description: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    available: true
  },
  {
    id: 3,
    topTitle: 'Сказочное заморское явство',
    title: 'Нямушка',
    eat: 'с курой',
    optionsCount: '100',
    optionsGift: '5 мышей в подарок',
    optionsWeldone: 'заказчик доволен',
    weight: '5',
    description: 'Филе из цыплят с трюфелями в бульоне.',
    available: false
  }
];

const Content = () => {
  const items = cardItems.map(item => <ContentFunc key={item.id} {...item} />);
  return <div className="cat__content">{items}</div>;
};

export default Content;
