function reducer(state, action) {
    switch (action.type) {
      case 'SET_USER_INFO':
        return { ...state, user: action.payload };
      case 'ADD_STEP':
        return { ...state, step: state.step + 1};
      case 'PREVIOUS_STEP':
        return { ...state, step: state.step - 1};
      case 'SET_USER_ADRESS':
        return { ...state, adress: action.payload };
      case 'SET_PHOTO':
        return { ...state, photo: action.payload };
      case 'SET_PASSWORD':
        return { ...state, password: action.payload };
      default:  
        return state; 
    }
  }
export default reducer;