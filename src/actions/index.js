export const fetchFurnituresSuccess = (furnitures) => {
    return {
      type: 'FETCH_FURNITURES_SUCCESS',
      furnitures: furnitures
    }
  }