import Footer from "./footer/footer";
import { Redirect, Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../utils/route_utils'
import Home from './home/home'
import LogInContainer from './session/login_container'
import SignUpContainer from './session/signup_container'
import NavBarContainer from './navbar/nav_bar_container'
import useGeoLocation from "../hooks/useGeoLocation";
import ListingForm from './listings/listing_form_container';
import ReviewFormContainer from './reviews/create_review_form_container'
import Test from "./geo/geo";
import ListingCategoryIndex from './category/listing_category_index_container'
import ListingIndexContainer from './listings/listing_index_container'
import ListingShow from "./listings/listing_show";
import UserShowContainer from './users/user_show_container'

export default () => (
    <div className="app-container">
        <NavBarContainer/>
        <Switch>
            <AuthRoute exact path='/login' component={LogInContainer}  />
            <AuthRoute exact path='/signup' component={SignUpContainer} />
            <Route exact path='/reviews/new' component={ReviewFormContainer} />
            <Route exact path='/category/:categoryid' component={ListingCategoryIndex} />
            <Route exact path='/listing/show' component={ListingShow} />
            <Route exact path='/listingForm' component={ListingForm} />
            <Route exact path='/listingForm' component={ListingForm} />
            <Route exact path='/test' component={Test} />
            <Route exact path='/userProfile' />
            <Route exact path='/users/:userId' component={UserShowContainer} />
            {/* <Route exact path='/test' component={useGeoLocation} /> */}
            {/* <Route exact path = '/' component={Home} /> */}
            <Route exact path ='/' component={ListingIndexContainer} />
            {/* <Route path="*" component={NotFoundPage} /> */}
            <Redirect to='/' />
        </Switch>

        <Footer />
    </div>
)