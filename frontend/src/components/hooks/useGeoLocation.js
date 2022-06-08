import { useEffect, useState } from 'react'

function Geo() {
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [zipCode,setZipcode] = useState('')
    // console.log(zipCode)
    
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
