const initState = {
    posts: [
        {id: '1', title: 'Squirtle Laid an Egg', body: 'blablabla...'},
        {id: '2', title: 'Charmander Laid an Egg', body: 'blablabla...'},
        {id: '3', title: 'a Helix Fossil was Found', body: 'blablabla...'}
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;