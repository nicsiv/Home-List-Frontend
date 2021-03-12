const initialState = [
]


const furnitureReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'FETCH_FURNITURES_SUCCESS':
      return action.furnitures
    // case 'DELETE_FURNITURE':
    //   updatedState = state.filter(furnitureObj => furnitureObj.id !== action.id )
    //   return updatedState
    default:
        return state
      }
      

  }



export default furnitureReducer