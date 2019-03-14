import React, { Component } from 'react';
import { Header, Container, Button, Icon, Segment} from 'semantic-ui-react'
import FlashCards from './FlashCards'
import AddForm from './AddForm'
import EditForm from './EditForm'
class App extends Component {
  state = {
    cardList: [
      {id: 1, question: "Question 1", answer: "Answer", showAnswer: false, },
      {id: 2, question: "Question 2", answer: "Answer", showAnswer: false, },
      {id: 3, question: "Question 3", answer: "Answer", showAnswer: false, },
    ],
    showAddForm: false,
    showEditForm: false,
    editingCard: null,

  }

  getId = () => Math.floor((Math.random() + 1) * 10000);

  addItem = (item) => {
    let newFlashCard = { id: this.getId(), ...item, showAnswer: false}
    this.setState( {
      cardList: [...this.state.cardList, newFlashCard]
    })
  }

  flip = (id) => {
    const { cardList, } = this.state;
    let item = cardList[id].showAnswer ?  Object.assign({}, cardList[id], {showAnswer: false, }) : Object.assign({}, cardList[id], {showAnswer: true, })
    cardList[id] = item;
    this.setState({cardList: cardList})
  }

  remove = (id) => {
    const cardList = this.state.cardList.filter( card => card.id !== id)
    this.setState({ cardList: cardList, })
  }

  edit = (id) => {
    const { cardList, showEditForm } = this.state;
    let card = cardList.map( card => { if (card.id === id) return card })
    // debugger
    this.setState({ editingCard: card[0].id})
    this.setState({showEditForm: !showEditForm})

  }

  addEditedItem = (item, id) => {
    const cardList = this.state.cardList.filter( card => card.id !== id)
    this.setState({ cardList: cardList, })
    let newFlashCard = { id: id, ...item, showAnswer: false}
    this.setState( {
      cardList: [...this.state.cardList, newFlashCard]
    })

    this.setState({ showEditForm: false})
  }

  toggleAddForm = () => this.setState({ showAddForm: !this.state.showAddForm, })

  render() {
    const { cardList, } = this.state;
    return (
      <Container>
        <Header>React Flash Cards</Header>
        <hr />
        <Segment basic>
          <Button icon color="blue" onClick={this.toggleAddForm} >
            {this.state.showAddForm ? (<Icon name='angle double up' />) : (<Icon name='angle double down' />)}
          </Button>
          {this.state.showAddForm ? <AddForm addItem={this.addItem} /> : null }
        </Segment>
        {this.state.showEditForm ? <EditForm editingCard={this.state.editingCard} addEditedItem={this.addEditedItem}/> : null }
        <FlashCards cardList={cardList} flip={this.flip} remove={this.remove} edit={this.edit} />
      </Container>
    );
  }
}

export default App;
