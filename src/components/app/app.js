import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../header/header'
import { HomePage, PostsPage, AlbumsPage } from '../pages'
import AlbumPhotosPage from '../pages/album-photos-page'
import UsersList from '../users-list/users-list'
import './app.css'

const App = () => {
  return (
    <main role="main">
      <Header />
      <Switch>
        <Route path="/jsonplaceholder/" component={HomePage} exact />
        <Route path="/users" component={UsersList} exact />
        <Route path="/posts" component={PostsPage} exact />
        <Route path="/albums" component={AlbumsPage} exact />
        <Route
          path="/albums/:id/photos"
          render={({ match }) => {
            const { id } = match.params;
            return <AlbumPhotosPage id={id} />;
          }}
        />
      </Switch>
    </main>
  );
}

export default App