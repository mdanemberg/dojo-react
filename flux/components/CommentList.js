'use strict';
var React = require('react');
import Comment from './Comment';
import silvioSantosMaoeee from '../actions/CreateCommentAction';

class CommentList extends React.Component {
    onSubmit(event) {
        event.preventDefault();
        this.props.context.executeAction(silvioSantosMaoeee, this.state);
        event.target.reset();
    }


    handleBodyChange(event) {
        this.setState({
            'postId': this.props.postId,
            'text': event.target.value
        });
    }

    render() {
        var comments = this.props.comments.map( 
            (comment) => <Comment comment={comment}
                key={this.props.postId + '_' + comment.id} /> 
        );

        return (
            <div>
                <ul>
                    {comments}        
                </ul>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input name="comment" onChange={this.handleBodyChange.bind(this)} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

module.exports = CommentList;
