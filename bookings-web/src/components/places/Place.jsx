import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const Place = ({
  id,
  name,
  description,
  location,
  pricePerNight,
  image,
  imageThumbnail,
  maxGuests,
  petFriendly,
  pool,
  wifi,
}) => {
  return (
    <ul>
      <Link to={id}>
      <li>Name: {name}</li>
      <li>Description: {description}</li>
      <li>Location: {location}</li>
      <li>Price: {pricePerNight}</li>
      <li><img src={image} alt={name} /></li>
      <li><img src={imageThumbnail} alt={name} /></li>
      <li>Max Guests:{maxGuests}</li>
      <li>Pet Friendly:{petFriendly ? 'Pet Friendly' : 'No Pets Allowed'}</li>
      {pool ? <li>Has a Pool!</li> : null}
      {wifi ? <li>Free Wifi</li> : null}
      </Link>
    </ul>
  );
};

Place.propTypes = {
  id:  PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  pricePerNight: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  imageThumbnail: PropTypes.string.isRequired,
  maxGuests: PropTypes.number.isRequired,
  petFriendly: PropTypes.bool.isRequired,
  pool: PropTypes.bool.isRequired,
  wifi: PropTypes.bool.isRequired,
};

export default Place;
