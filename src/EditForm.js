import React from 'react';
import { Form, } from 'semantic-ui-react'
class EditForm extends React.Component {
  state = { question: "", answer: ""}

  handleChange = (event) => {
		this.setState({[event.target.name]: event.target.value})
	}

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addEditedItem(this.state, this.props.id)
    this.setState({ question: "", answer: "", })
  }

  render () {
    const { question, answer, } = this.props;

    return (
      <div>
        <h2>Edit </h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
            fluid
            label="Question"
            placeholder={question}
            name="question"
            value={this.state.question}
            onChange={this.handleChange}
            />
            <Form.Input
            fluid
            label="Answer"
            placeholder={answer}
            name="answer"
            value={this.state.answer}
            onChange={this.handleChange}
            />
            <Form.Button>submit</Form.Button>
          </Form.Group>
        </Form>
      </div>
    )
  }
}
export default EditForm;
