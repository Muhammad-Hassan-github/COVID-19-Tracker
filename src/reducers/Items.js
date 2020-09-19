const items = (state, action) => {

    console.log(action.paylod)
  
    switch (action.type) {
  
      case 'ADD_ITEM':
        return {
          ...state,
          item: [...state.item, action.paylod]
        }
  
  
      // case 'DELETE_ITEM':
      //   return {
      //     ...state,
      //     item: state.item.filter((item) => { return item !== action.paylod })
      //   }
  
      case 'DELETE_ITEM':
        state.item.splice(action.paylod, 1)
        return {
          ...state,
        }
  
      default:
        return {
          state
        }
    }
  
  }
  

  export default items;
  