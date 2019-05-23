export function managePresents(state, action){
  let newState
  switch (action.type) {
    case 'INCREASE':
      newState = {numberOfPresents: state.numberOfPresents+1}
      break
    default:
      newState = state
      break
  }
  return newState
}
