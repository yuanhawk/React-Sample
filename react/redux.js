const {createStore} = Redux;

const initState = {
  todos: [],
  posts: []
}

function myReducer(state = initState, action) {
  if (action.type == 'ADD_TODO') {
    return {
      ...state,
      todos: [...state.todos, action.todo]
    }
  } else if (action.type == 'ADD_POST') {
        return {
      ...state,
      posts: [...state.posts, action.post]
    }
  }
}

const store = createStore(myReducer);

store.subscribe(() => {
  console.log('state updated');
  console.log(store.getState());
})

const todoAction = {
  type: 'ADD_TODO',
  todo: 'buy milk'
}

const todoAction2 = {
  type: 'ADD_TODO',
  todo: 'sleep some more'
}

const todoAction3 = {
  type: 'ADD_POST',
  post: 'egg hunt with yoshi'
}

store.dispatch(todoAction);
store.dispatch(todoAction2);
store.dispatch(todoAction3);
