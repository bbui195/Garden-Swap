import { useEffect, useState } from 'react'

function Geo() {
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [zipCode,setZipcode] = useState('')
    console.log(zipCode)
    
    const userLocation= `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`

    

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position)
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)

            fetch(userLocation)
                .then(res => res.json())
                .then(data => {
                    setZipcode(data.postcode)
                })
        })
    },[])

    return(
        <div>
        </div>
    )
}

export default Geo


// //to use google maps reverse geo locaiton and show on google maps

// let img = new Image();
// img.src = `https://maps.googleapis.com/maps/api/staticmap?center=${position.coords.latitude},${position.coords.longitude}&zoom=13&size=800x400&sensor=false`;
// $('#output').html(img);