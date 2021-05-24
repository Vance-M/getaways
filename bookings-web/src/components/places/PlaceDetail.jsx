import React, { useState, useEffect }  from 'react'
import { getPlaceByName } from '../../services/placesApi';
import { useParams } from 'react-router-dom';


export default function PlaceDetail() {
    const [loading, setLoading] = useState(true);
    const [places, setPlaces] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getPlaceByName(id)
        .then(setPlaces)
        .finally(() => setLoading(false));
      }, []);
    
    if(loading) return <h1>Loading...</h1>
    return (
        <div>
            <ul>
                <li>Name: {places.name}</li>
                <li>Description: {places.description}</li>
                <li>Location: {places.location}</li>
                <li>Price: {places.pricePerNight}</li>
                <li><img src={places.image} alt={places.name} /></li>
                <li><img src={places.imageThumbnail} alt={places.name} /></li>
                <li>Max Guests:{places.maxGuests}</li>
                <li>Pet Friendly:{places.petFriendly ? 'Pet Friendly' : 'No Pets Allowed'}</li>
                {places.pool ? <li>Has a Pool!</li> : null}
                {places.wifi ? <li>Free Wifi</li> : null}
            </ul>
        </div>
    )
}
