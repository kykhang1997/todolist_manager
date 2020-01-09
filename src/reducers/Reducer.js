import * as Types from "../constants/ActionType";

const reducerInitialState = [];
export function reducer(state = reducerInitialState, action) {
  switch (action.type) {
    case Types.FETCH_PRODUCTS:
      state = action.products;
      return [...state];
    case Types.DELETE_PRODUCTS:
      var index = state.findIndex(item => {
        return item.id === action.id;
      });
      state.splice(index, 1);
      return [...state];
    case Types.ADD_PRODUCTS:
      state.push(action.products);
      return [...state];
    case Types.EDIT_PRODUCTS:
      return action.products;
    case Types.UPDATE_PRODUCTS:
     const index2 = state.findIndex(({ id }) => id === action.products.id);
      state[index2] = action.products;
      return [...state];
    default:
      return state;
  }
}
