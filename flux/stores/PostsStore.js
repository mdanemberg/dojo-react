import BaseStore from 'fluxible/addons/BaseStore';

class PostsStore extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher); 
               
        this.posts = [
            {
                id: 0,
                title: 'Fluxible',
                text: 'Silvio Santos Ipsum É dinheiro ou não éam? Ma você está certo dissoam? É dinheiro.',
                comments: []
            },
            {
                id: 1,
                title: 'Moises',
                text: 'Silvio Santos Ipsum É dinheiro ou não éam? Ma você está certo dissoam? É dinheiro.',
                comments: [
                    {
                        id: 0,
                        text: 'Gostei bastante de Dojo, parabéns.'
                    },
                    {
                        id: 1,
                        text: 'Achei um cocô'
                    },
                    {
                        id: 2,
                        text: 'Moisés'
                    }
                ]
            }
        ];
    }
    getPosts() {
        return this.posts;
    }
    createPost(payload) {
        this.posts.push(payload);
        this.emitChange();
    }
    // createComment
    silvioSantosMaoeee(payload) {
        payload.id = this.posts[payload.postId].comments.length;
        this.posts[payload.postId].comments.push(payload);
        this.emitChange();
    }
    dehydrate() {
        return {
            posts: this.posts
        };
    }
    rehydrate(state) {
        this.posts = state.posts;
    }
}

PostsStore.storeName = 'PostsStore';
PostsStore.handlers = {
    'CREATE_POST': 'createPost',
    'CREATE_COMMENT': 'silvioSantosMaoeee'
};

export default PostsStore;
