import React from 'react';
import { Form, } from 'semantic-ui-react';
class AddForm extends React.Component {
	state = { question: "", answer: "", };

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.addItem(this.state)
		this.setState({ question: "", answer: "", })
	}
	handleChange = (event) => {
		this.setState({[event.target.name]: event.target.value})
	}
	render() {
		return (
			<Form onSubmit={this.handleSubmit}>
				<Form.Group widths="equal">
					<Form.Input
						fluid 
            label="Question" 
            placeholder="Question" 
            name="question" 
            value={this.state.question} 
            onChange={this.handleChange}
					/>
					<Form.Input
						fluid 
            label="Answer" 
            placeholder="Answer" 
            name="answer" 
            value={this.state.answer} 
            onChange={this.handleChange}
					/>
					<Form.Button>Submit</Form.Button>
				</Form.Group>
			</Form>

		)
	}
}
export default AddForm;
