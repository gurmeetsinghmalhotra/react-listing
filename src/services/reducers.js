import { combineReducers } from 'redux';
import hotelReducer from './hotel/reducer';
import filtersReducer from './filters/reducer';
import sortReducer from './sort/reducer';

export default combineReducers({
  hotel: hotelReducer,
  filters: filtersReducer,
  sort: sortReducer
});
