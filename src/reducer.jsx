

export default (state = {}, action) => {
  switch (action.type) {      
    case 'ADD_TASKS':
        return { ...state, tasks: action.tasks };

    case 'ADD_TOKEN':
      return { ...state, token: action.token };

    case 'DELETE_TOKEN':
      if (!state.token) {
        return { ...state }
      }
      delete state.token;
      return { ...state };
      
      case 'ADD_ID':
        return { ...state, id: action.id };
          
    default:
      return state;
  }
}
