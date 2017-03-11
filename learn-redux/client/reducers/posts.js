// a reducer takes in two things

//1. the action( info about what happens )
//2. copy of current state

function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES':
    //return the updated state
    const i = action.index;
    return [
      ...state.slice(0,i),
      {...state[i], likes: state[i].likes + 1},//before the one we are updating
      ...state.slice(i + 1 ),
    ]
    default:
    return state;
  }
}

export default posts;
