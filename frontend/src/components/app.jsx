import Footer from "./footer/footer";
import { Redirect, Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../utils/route_utils'
import Home from './home/home'
import LogInContainer from './session/login_container'
import SignUpContainer from './session/signup_container'
import NavBarContainer from './navbar/nav_bar_container'
import NotFoundPage from './not_found/not_found'

export default () => (
    <div className="app-container">
        <NavBarContainer/>
        <Switch>
            <AuthRoute exact path='/login' component={LogInContainer}  />
            <AuthRoute exact path='/signup' component={SignUpContainer} />
            <Route exact path = '/' component={Home} />
            {/* <Route path="*" component={NotFoundPage} /> */}
            <Redirect to='/' />
        </Switch>

        <Footer />
    </div>
)