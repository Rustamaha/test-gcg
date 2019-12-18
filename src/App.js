import React, { Component } from 'react';
import Header from './Header';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import Footer from './Footer';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <SectionOne />
        <SectionTwo />
        <Footer />
      </div>
    );
  }
}
