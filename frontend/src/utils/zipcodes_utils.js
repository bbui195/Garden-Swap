import  { isPointWithinRadius } from 'geolib'
import zipcodes_list from './zipcodes_list'

let seen = {}

function getDistanceFromLatLonInMiles(lat1,lon1,lat2,lon2) {
    let query = lat1.toString() + " " + lon1.toString() + " " + lat2.toString() + " " + lon2.toString();
    // console.log(query);
    if(seen[query]) {
        return seen[query];
    }
    let R = 6371; // Radius of the earth in km
    let dLat = deg2rad(lat2-lat1);  // deg2rad below
    let dLon = deg2rad(lon2-lon1); 
    let a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2); 
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    let d = R * c * 0.621371; // Distance in km
    // console.log(d);
    seen[query] = d;
    return d;
}
  
function deg2rad(deg) {
    return deg * (Math.PI/180)
}

export function isWithinRadiusFromZipcode(zipcode,listingZipcode,radius){
    if (zipcodes_list[zipcode] === undefined) {
        return false
    } 

    if (zipcodes_list[listingZipcode] === undefined) {
        return false
    }
    let pos1 = zipcodes_list[zipcode];
    let pos2 = zipcodes_list[listingZipcode];
    // console.log("radius is", radius);
    return getDistanceFromLatLonInMiles(pos1.latitude, pos1.longitude, pos2.latitude, pos2.longitude) < radius;

    return isPointWithinRadius(
        zipcodes_list[zipcode], // gets long lat from user zipcode
        zipcodes_list[listingZipcode], //gets long lat from listingzipcode
        radius
    )
}


