export function manageFriends(state, action){
  let newState
  switch (action.type) {
    case 'ADD_FRIEND':
      newState = {friends: [...state.friends, action.friend]}
      break
    case 'REMOVE_FRIEND':
      newState = {friends: state.friends.filter(fren => fren.id !== action.id)}
      break
    default:
      newState = state
      break
  }
  console.log(newState);
  return newState
}
