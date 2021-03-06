import React, { useEffect } from 'react';
import { connect } from "react-redux";
import {
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
import { createStructuredSelector } from "reselect";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Checkout from './pages/checkout/checkout.component';

import './App.scss';

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from './redux/user/user.actions';

const App = ({ checkUserSession, currentUser }) => {
    useEffect(() => {
        checkUserSession();
    }, [checkUserSession]);

    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/shop" component={ShopPage}/>
                <Route exact path="/checkout" component={Checkout}/>
                <Route exact path="/signin" render={() => currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUp/>)}/>
            </Switch>
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
