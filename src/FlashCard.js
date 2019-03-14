import React from 'react'
import { Card, Button, Icon, } from 'semantic-ui-react';
const FlashCard = ({ question, answer, showAnswer, flip, index, remove, id, edit}) => (
  <Card>
    <Card.Content>
      {showAnswer ? (<Icon name="question circle outline" />) : (<Icon name="question circle" />)}
      
      {showAnswer ? (<Card.Description>{answer}</Card.Description>) : (<Card.Header>{question}</Card.Header>)}
    </Card.Content>
    <Card.Content extra>
      <div className='ui three buttons'>
        <Button basic color='green' onClick={() => flip(index)} >
          Flip Card
        </Button>
        <Button basic color='red' onClick={() => remove(id)} >
          Delete Card
        </Button>
        <Button basic color='blue' onClick={() => edit(id)} >
          Edit Card
        </Button>
      </div>
    </Card.Content>

  </Card>
)
export default FlashCard;
