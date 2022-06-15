import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';

import { HomePage } from './pages/homepage/homepage';
import { ShopPage } from './pages/shop/shop';
import SignUpIn from './pages/signin-signup/sigin-signup';
import Header from './components/header/header';
import './App.css';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data,
            },
          });
        });
      }
      setCurrentUser({ currentUser: userAuth });
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    console.log();
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignUpIn />} />
        </Routes>
      </div>
    );
  }
}

export default connect(null, { setCurrentUser })(App);
