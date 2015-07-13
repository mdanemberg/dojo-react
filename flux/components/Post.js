'use strict';
var React = require('react');
import CommentList from '../components/CommentList';

class Post extends React.Component {
    render() {
    	var post = this.props.post;
    	
        return (
            <article>
                <h1>{ post.title }</h1>
                <p>{ post.text }</p>

                <CommentList comments={post.comments}
                    context={this.props.context}
                    postId={post.id} />
            </article>
        );
    }
}

module.exports = Post;
