import Footer from "./footer/footer";
import { Redirect, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import LogInContainer from './session/login_container';
import SignUpContainer from './session/signup_container';
import NavBarContainer from './navbar/nav_bar_container';
import ListingForm from './listings/listing_form_container';
import EditListingForm from './listings/edit_listing_form_container'
import ReviewFormContainer from './reviews/create_review_form_container';
import UserShowContainer from '../components/users/user_show_container';
import Test from "./geo/geo";
import ListingCategoryIndex from './category/listing_category_index_container';
import ListingIndexContainer from './listings/listing_index_container';
import InboxContainer from './messaging/inbox_container';
import ConversationContainer from "./messaging/conversation_container";
import ListingShow from "./listings/listing_show_container";
import EditReviewContainer from './reviews/edit_review_form_container';
import { useState, useEffect } from 'react'

export default () => {
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [location, setLocation] = useState({
        zipCode: '',
        radius: 1000
    })

    function updateLocationZipcode(zipCode) {
        setLocation({...location, zipCode})
    }

    function updateLocationRadius(radius) {
        setLocation({...location,radius})
    }
    
    function updateZip() {
        navigator.geolocation.getCurrentPosition(position => {
            const userLocation = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`

            

            // // setLatitude(position.coords.latitude)
            // // setLongitude(position.coords.longitude)
            fetch(userLocation)
                .then(res => res.json())
                .then(data => {
                    setLocation({ radius: 1000, zipCode: data.postcode })
                })
        })
    }

    return (
        <div className="app-container">
            <NavBarContainer 
                updateZip={updateZip} 
                updateLocationRadius={updateLocationRadius}
                updateLocationZipcode={updateLocationZipcode}
                location={location}
            /> 

            <Switch>
                <AuthRoute exact path='/login' component={LogInContainer}  />
                <AuthRoute exact path='/signup' component={SignUpContainer} />
                <Route exact path='/reviews/:userId/new' component={ReviewFormContainer} />
                <Route exact path='/reviews/:reviewId/edit' component={EditReviewContainer} />
                <Route exact path='/category/:categoryId' component={()=><ListingIndexContainer location={location}/>} />
                <Route exact path='/listing/show' component={ListingShow} />
                <Route exact path='/listing/:listingId' component={ListingShow} />
                <Route exact path='/listingForm' component={ListingForm} />
                <Route exact path='/listing/edit/:listingId' component={EditListingForm}/>
                <Route exact path='/users/:userId' component={UserShowContainer}/>
                {/* <Route exact path= '/user/inbox' component={InboxContainer}/> */}
                {/* <Route exact path="/user/inbox/:sender" component={ConversationContainer}/> */}
                <Route exact path='/test' component={Test} />
                <Route exact path='/userProfile' />
                <Route exact path ='/' component={()=><ListingIndexContainer location={location}/>} />
                <Redirect to='/' />
            </Switch>
            <Footer />
        </div>
    )
}