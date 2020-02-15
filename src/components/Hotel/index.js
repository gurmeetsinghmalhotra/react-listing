import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchHotels } from '../../services/hotel/actions';

import Spinner from '../Spinner';
import HotelHeader from './HotelHeader';
import HotelList from './HotelList';

class Hotel extends Component {
  static propTypes = {
    fetchHotels: PropTypes.func.isRequired,
    hotels: PropTypes.array.isRequired,
    filters: PropTypes.array,
    sort: PropTypes.string
  };

  state = {
    isLoading: false
  };

  componentDidMount() {
    this.handleFetchHotels();
  }

  componentWillReceiveProps(nextProps) {
    const { filters: nextFilters, sort: nextSort } = nextProps;
    const { filters } = this.props;
    if (nextFilters.length !== filters.length) {
      this.handleFetchHotels(nextFilters, undefined);
    }

    if (nextSort !== this.props.sort) {
      this.handleFetchHotels(undefined, nextSort);
    }
  }

  handleFetchHotels = (
    filters = this.props.filters,
    sort = this.props.sort
  ) => {
    this.setState({ isLoading: true });
    this.props.fetchHotels(filters, sort, () => {
      this.setState({ isLoading: false });
    });
  };

  render() {
    const { hotels } = this.props;
    const { isLoading } = this.state;

    console.log(hotels);

    return (
      <React.Fragment>
        {isLoading && <Spinner />}
        <div className="shelf-container">
          <HotelHeader hotelsLength={hotels.length} />
          <HotelList hotels={hotels} />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  hotels: state.hotel.hotels,
  filters: state.filters.items,
  sort: state.sort.type
});

export default connect(
  mapStateToProps,
  { fetchHotels }
)(Hotel);
