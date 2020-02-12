import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser } from "./redux/actions/authActions";

import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
// import Header from "./components/header/header.component";
// import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import store from "./redux/store";
import SignUp from "./components/sign-up/sign-up.component";
import SignIn from "./components/sign-in/sign-in.component";

// check for token
if (localStorage.jwtToken) {
  // set Auth token to header
  setAuthToken(localStorage.jwtToken);
  // decode token and get user info
  const decode = jwt_decode(localStorage.jwtToken);
  // set user and isAuthenticated
  store.dispatch(setCurrentUser(decode));
}

function App() {

  const handleRedirect = () => {
    if (localStorage.jwtToken) {
        return <Redirect to="/homepage" />
    } else {
      return <Redirect to="/signin" />
    }
  }

  return (
    <Provider store={store}>
      <div className="App">
          <Switch>
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/homepage" component={Homepage} />
            {handleRedirect()}
          </Switch>
      </div>
    </Provider>
  );
}

export default App;
