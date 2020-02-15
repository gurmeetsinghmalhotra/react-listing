import React from 'react';

import Hotel from './Hotel';

const HotelList = ({ hotels }) => {
  return hotels.map(p => {
    return <Hotel hotel={p} key={p.id} />;
  });
};

export default HotelList;
