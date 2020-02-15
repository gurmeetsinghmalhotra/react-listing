import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import Thumb from '../../../Thumb';
// import { formatPrice } from '../../../../services/util';
// import { addProduct } from '../../../../services/cart/actions';

const Hotel = ({ hotel }) => {
  // product.quantity = 1;

  // let formattedPrice = formatPrice(product.price, product.currencyId);

  // let productInstallment;

  // if (!!product.installments) {
  //   const installmentPrice = product.price / product.installments;

  //   productInstallment = (
  //     <div className="installment">
  //       <span>or {product.installments} x</span>
  //       <b>
  //         {product.currencyFormat}
  //         {formatPrice(installmentPrice, product.currencyId)}
  //       </b>
  //     </div>
  //   );
  // }

  return (
    <div
      className="shelf-item"
      data-sku={hotel.sku}
    >
      {hotel.isFreeShipping && (
        <div className="shelf-stopper">Free shipping</div>
      )}
      <p className="shelf-item__title">{hotel.title}</p>
      {/* <div className="shelf-item__price">
        <div className="val">
          <small>{product.currencyFormat}</small>
          <b>{formattedPrice.substr(0, formattedPrice.length - 3)}</b>
          <span>{formattedPrice.substr(formattedPrice.length - 3, 3)}</span>
        </div>
        {productInstallment}
      </div> */}
    </div>
  );
};

Hotel.propTypes = {
  hotel: PropTypes.object.isRequired
};

export default connect(null)(Hotel);
