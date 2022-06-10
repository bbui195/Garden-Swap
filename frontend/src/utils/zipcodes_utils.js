import  { isPointWithinRadius } from 'geolib'
import zipcodes_list from './zipcodes_list'

export function isWithinRadiusFromZipcode(zipcode,listingZipcode,radius){
    if (zipcodes_list[zipcode] === undefined) {
        return false
    } 

    if (zipcodes_list[listingZipcode] === undefined) {
        return false
    }

    return isPointWithinRadius(
        zipcodes_list[zipcode], // gets long lat from user zipcode
        zipcodes_list[listingZipcode], //gets long lat from listingzipcode
        radius
    )
}


