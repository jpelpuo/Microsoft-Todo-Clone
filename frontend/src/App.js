import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import AuthPage from "./pages/Auth";
import RegisterPage from "./pages/Register";
import history from './helpers/history';
import { clearAlert } from './redux/actions/alertActions'

const mapStateToProps = state => {
  return {
    token: state.authentication.token
  }
}

function App(props) {
  const { token } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location, action) => {
      dispatch(clearAlert());
    })
  }, []);

  return (
    <Router history={history}>
      <div className="App">
        <Switch>
          <Redirect from="/" to="/auth" exact />
          {/* {token && <Redirect exact from="/auth" to="/register" />} */}
          <Route path="/auth" component={AuthPage} />
          <Route path="/register" component={RegisterPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default connect(mapStateToProps, null)(App);
