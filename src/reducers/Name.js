const Name = (state, action) => {

  
  
    switch (action.type) {
  
      case 'ADD_NAME':
        return {
          ...state,
          name: [...state.name, action.paylod]
        }
  
  
      // case 'DELETE_ITEM':
      //   return {
      //     ...state,
      //     item: state.item.filter((item) => { return item !== action.paylod })
      //   }
  
      case 'DELETE_NAME':
        state.name.splice(action.paylod, 1)
        return {
          ...state,
        }
  
      default:
        return {
          state
        }
    }
  
  }
  

  export default Name;
  