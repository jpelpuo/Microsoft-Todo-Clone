import React, {useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import AuthPage from "./pages/Auth/index";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <AuthPage/>
        </div>
      </BrowserRouter>

    </Provider>
  );
}

export default App;
