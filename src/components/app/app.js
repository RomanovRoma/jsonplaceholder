import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import Footer from '../footer/footer'
import Header from '../header/header'
import { HomePage, PostsPage, AlbumsPage } from '../pages'
import AlbumPhotosPage from '../pages/album-photos-page'
import './app.css'

const App = () => {
  return (
    <main role="main">
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/posts" component={PostsPage} exact />
        <Route path="/albums" component={AlbumsPage} exact />
        <Route path="/albums/:id/photos"
          render={({ match }) => {
            const { id } = match.params;
            return <AlbumPhotosPage id={id} />
          }} />
      </Switch>
      {/* <Footer /> */}
    </main>
  );
}

export default App