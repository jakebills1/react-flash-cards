import React from 'react';
import FlashCard from './FlashCard'
import { Card, } from 'semantic-ui-react'
const FlashCards = ({ cardList, flip, remove, edit}) => (
  <Card.Group>
    {
      cardList.map( (card, index) => (
        <FlashCard key={card.id} {...card} flip={flip} index={index} remove={remove} edit={edit} />
      ))
    }
  </Card.Group>
)
export default FlashCards;
