export default {
    home: {
        path: '/',
        method: 'get',
        page: 'home',
        title: 'Home',
        handler: require('../components/Home')
    },
    write: {
        path: '/write',
        method: 'get',
        page: 'write',
        title: 'Write a post',
        handler: require('../components/Write')
    }
};
