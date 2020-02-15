import { FETCH_HOTELS } from './actionTypes';

const initialState = {
  hotels: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_HOTELS:
      return {
        ...state,
        hotels: action.payload
      };
    default:
      return state;
  }
}
