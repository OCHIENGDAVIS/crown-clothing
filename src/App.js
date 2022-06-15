import { Route, Routes } from 'react-router-dom';
import React from 'react';

import { HomePage } from './pages/homepage/homepage';
import { ShopPage } from './pages/shop/shop';
import SignUpIn from './pages/signin-signup/sigin-signup';
import Header from './components/header/header';
import './App.css';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  unsubscribeFromAuth = null;
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data,
            },
          });
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignUpIn />} />
        </Routes>
      </div>
    );
  }
}

export default App;
