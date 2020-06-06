import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import AuthPage from "./pages/Auth";
import RegisterPage from "./pages/Register";
import history from './helpers/history';
import { clearAlert } from './redux/actions/alertActions';
import { getTasks } from './redux/actions/taskActions';
import MainLayout from './layout/MainLayout';
import MyDayPage from './pages/Main/MyDayPage';
import ImportantTasksPage from './pages/Main/ImportantTasksPage';
import TasksPage from './pages/Main/TasksPage';

function App(props) {
  const { token } = props;

  const dispatch = useDispatch();
  const mainAppState = useSelector(state => state.mainApp);

  useEffect(() => {
    history.listen((location, action) => {
      dispatch(clearAlert());
    });
    dispatch(getTasks())
  }, []);

  return (
    <Router history={history}>
      <div className="App">
        <Switch>
          <Redirect from="/" to="/app" exact />
          <Route
            exact
            path="/app"
            render={() => (
              <MainLayout>
                <MyDayPage />
              </MainLayout>)}
          />
          <Route
            exact
            path="/app/myday"
            render={() => (
              <MainLayout>
                <MyDayPage />
              </MainLayout>)} />
          <Route
            exact
            path="/app/important"
            render={() => (
              <MainLayout>
                <ImportantTasksPage />
              </MainLayout>)} />
          <Route
            exact
            path="/app/tasks"
            render={() => (
              <MainLayout>
                <TasksPage />
              </MainLayout>)} />
          <Route path="/auth" component={AuthPage} />
          <Route path="/register" component={RegisterPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
