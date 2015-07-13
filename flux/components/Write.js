import React from 'react';
import createPost from '../actions/CreatePostAction';

class Write extends React.Component {
	handleTitleChange(event) {
		this.setState({
			'title': event.target.value
		});
	}

	handleBodyChange(event) {
		this.setState({
			'text': event.target.value
		});
	}

	onSubmit(event) {
		event.preventDefault();
		this.props.context.executeAction(createPost, this.state);
	} 

    render() {
        return (
        	<form onSubmit={this.onSubmit.bind(this)}>
        		<input name="title" onChange={this.handleTitleChange.bind(this)}/>
        		<textarea name="body" onChange={this.handleBodyChange.bind(this)}/>
        		<button type="submit">Submit</button>
        	</form>
        );
    }
}

export default Write;
