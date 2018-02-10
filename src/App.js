import React, { Component } from 'react';
import Shirts from './Components/Shirts/shirts'
import Header from './Components/Header/header'
import router from "./router";
import Footer from './Components/Footer/footer'
import Advert from './Components/Advert/advert'
import "./App.css"

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {router}
      </div>
    );
  }
}

export default App;
