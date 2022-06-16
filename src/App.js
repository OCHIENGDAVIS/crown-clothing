import { Route, Routes, Navigate } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';

import { HomePage } from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import CheckOut from './pages/checkout/checkout';
import SignUpIn from './pages/signin-signup/sigin-signup';
import Header from './components/header/header';
import ProtectedRoute from './components/protectedRoute/protected-route';
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
    return (
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignUpIn />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
  };
};

export default connect(mapStateToProps, { setCurrentUser })(App);
