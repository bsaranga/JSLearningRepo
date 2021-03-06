import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'
import Signup from './user/Signup'
import Users from './user/Users'
import SignIn from './auth/Signin'
import Profile from './user/Profile'
import PrivateRoute from './auth/PrivateRoute'
import EditProfile from './user/EditProfile'
import Header from './core/Header'
import Timer from './timer/Timer'

const MainRouter = () => {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/users" component={Users}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/signin" component={SignIn}/>
                <PrivateRoute path="/user/edit/:userId" component={EditProfile}/>
                <Route path="/user/:userId" component={Profile}/>
                <Route path="/timer" component={Timer}/>
            </Switch>
        </div>
    )
}

export default MainRouter