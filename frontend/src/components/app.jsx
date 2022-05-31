import Footer from "./footer/footer";
import { Switch } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../utils/route_utils'




export default () => (
    <>
        <Switch>
            <AuthRoute exact path='/login' component={LogInContainer}  />
            <AuthRoute exact path='/signup' component={SignUpContainer} />
            <Route exact path = '/' component={Home} />
        </Switch>

        <Footer />
    </>
)