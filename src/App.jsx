import React from 'react';
import './App.css';
import AppRouter from './config/routers.jsx';


class App extends React.Component {
  render() {
    return (
      <AppRouter />
    );
  }
}

export default App;