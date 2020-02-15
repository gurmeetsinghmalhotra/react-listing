import React from 'react';
import PropTypes from 'prop-types';

import Sort from '../Sort';

const HotelHeader = props => {
  return (
    <div className="shelf-container-header">
      <small className="products-found">
        <span>{props.hotelsLength} Product(s) found.</span>
      </small>
      <Sort />
    </div>
  );
};

HotelHeader.propTypes = {
  hotelsLength: PropTypes.number.isRequired
};

export default HotelHeader;
