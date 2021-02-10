import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Footer from '../footer/footer'
import Header from '../header/header'
import { HomePage, PostsPage, AlbumsPage } from '../pages'
import './app.css'

const App = () => {
  return (
    <main role="main" className="container">
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/posts" component={PostsPage} exact />
        <Route path="/albums" component={AlbumsPage} exact />
      </Switch>
      <Footer />
    </main>
  );
}

export default App