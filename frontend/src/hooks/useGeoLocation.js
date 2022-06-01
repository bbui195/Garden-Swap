import React, { useEffect, useState } from 'react'
import { $where } from '../../../models/User';

const useGeoLocation = () => {
    const [location, setLocation] = useState({
        loaded:false, 
        coordinates: {lat:'', lng:''},
    })

    const onSucess = true;
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latiude,
                lng: location.coords.longitude
            }
        })

    const onError = error => {
        setLocation({
            loaded: true,
            error
        })
    }

    useEffect(() => {
        if((!'geolocation' in navigator)) {
            onError({
                code: 0,
                message: "Geolocation is not supported",
            })
        }


        //this will get the user's location
        navigator.geolocaiton.getCurrentPosition(onSuccess, onError)
    },[])

    return location
}

export default useGeoLocation


//to use google maps reverse geo locaiton and show on google maps

let img = new Image();
img.src = `https://maps.googleapis.com/maps/api/staticmap?center=${position.coords.latitude},${position.coords.longitude}&zoom=13&size=800x400&sensor=false`;
$('#output').html(img);