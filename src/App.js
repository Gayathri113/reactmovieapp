import React,{Suspense} from 'react'
import {Route,Switch,withRouter} from 'react-router-dom'

import Layout from './components/Layout/Layout'
import OuterCover from './hoc/OuterCover/OuterCover'
import Logout from './containers/Logout/Logout'

const SeriesPage=React.lazy(()=>{
    return import('./series/SeriesPage')
})

const FavSeriesPage=React.lazy(()=>{
    return import('./series/FavSeriesPage')
})

let routes=(
    <Switch> 
        <Route path="/favseries" render={(props)=><FavSeriesPage {...props}/>}/>
        <Route path="/serieslovers"  render={(props)=><SeriesPage {...props}/>}/>
        <Route path="/logout" exact component={Logout}/>
        <Route path="/" exact component={Layout}/>
    </Switch>
)

const App=(props)=>{
    return(
        <div>
            <React.Fragment>
            <OuterCover>
               <Suspense fallback={<p>Loading....</p>}>
                   <main>
                  {routes}
                  </main>
                </Suspense>
            </OuterCover> 
            </React.Fragment>
        </div>
    )
}

export default withRouter(App)