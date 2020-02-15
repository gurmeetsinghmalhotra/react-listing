import { FETCH_HOTELS } from './actionTypes';
import axios from 'axios';

import { hotelsAPI } from '../util';

const compare = {
  lowestprice: (a, b) => {
    if (a.price < b.price) return -1;
    if (a.price > b.price) return 1;
    return 0;
  },
  highestprice: (a, b) => {
    if (a.price > b.price) return -1;
    if (a.price < b.price) return 1;
    return 0;
  }
};

export const fetchHotels = (filters, sortBy, callback) => dispatch => {
  return axios
    .get(hotelsAPI)
    .then(res => {
      let hotels = res.data.products;

      if (!!filters && filters.length > 0) {
        hotels = hotels.filter(p =>
          filters.find(f => p.availableSizes.find(size => size === f))
        );
      }

      if (!!sortBy) {
        hotels = hotels.sort(compare[sortBy]);
      }

      if (!!callback) {
        callback();
      }

      return dispatch({
        type: FETCH_HOTELS,
        payload: hotels
      });
    })
    .catch(err => {
      console.log('Could not fetch hotels. Try again later.');
    });
};