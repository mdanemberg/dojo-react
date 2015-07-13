'use strict';
var React = require('react');

class Comment extends React.Component {
    render() {
    	var comment = this.props.comment;
    	
        return (
            <li>
                <p>{comment.text}</p>
            </li>
        );
    }
}

module.exports = Comment;
