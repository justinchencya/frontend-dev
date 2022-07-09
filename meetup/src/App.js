import { Route, Switch } from 'react-router-dom'
import AllMeetupsPage from './pages/AllMeetups'
import NewMeetupPage from './pages/NewMeetup'
import FavoritesPage from './pages/Favorites'
import Layout from './components/layout/Layout'

function App() {
  return (
  <Layout>
    {/* only one page can be rendered each time */}
    <Switch>
    <Route exact path='/'>
      <AllMeetupsPage></AllMeetupsPage>
    </Route>

    <Route path='/new-meetup'>
      <NewMeetupPage></NewMeetupPage>
    </Route>

    <Route path='/favorites'>
      <FavoritesPage></FavoritesPage>
    </Route>
    </Switch>
  </Layout>
  )
}

export default App;
