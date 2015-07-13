'use strict';
var React = require('react');
import { connectToStores } from 'fluxible-addons-react';
import PostsStore from '../stores/PostsStore';
import Post from './Post';

class Home extends React.Component {
    render() {
    	var posts = this.props.posts.map(
            (post) => <Post post={post} key={post.id}
                context={this.props.context} />
        );
    	
        return (
            <div>
                <h2>Posts</h2>                
                { posts }
            </div>
        );
    }
}

Home = connectToStores(
	Home,
	[PostsStore],
	function (context, props) {
		var postsStore = context.getStore(PostsStore);
        return {
            posts: postsStore.getPosts()
        };
	});
module.exports = Home;
