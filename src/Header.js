import React, { Component } from 'react';
import firstPic from './imgs/1pic.jpg';
import secondPic from './imgs/2pic.jpg';

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='header__menu'>
          <div className='header__cell header__label'>
            <a className='header__link' href='#search'>GM photos</a>
          </div>
          <div className='header__cell header__cell_search'>
            <a className='header__link' href='#home'><i className='fas fa-search'></i></a>
          </div>
          <div className='header__cell header__cell_toggle-menu'>
            <a className='header__link' href='#categories'><span className='header__toggle-menu'></span></a>
          </div>
        </div>
        <div className='header__content'>
          <div className='header__text'>
            <div className='header__h1'>
              Фотография как отражение души
            </div>
            <div className='header__paragraph'>Меня зовут Галина Мэй и я люблю показывать людям насколько они красивы.</div>
            <button className='header__button'>
              Заказать фотосессию
            </button>
            <div className='header__carousel'>
              <div className='header__value header__value_left'>01</div>
              <div className='header__line'></div>
              <div className='header__value'>03</div>
            </div>
            <div className='header__video-player'>
             <img className='header__video' src={secondPic} alt='a girl with a bubblegum' />
            </div>
          </div>
          <img className='header__img' src={firstPic} alt='a girl on black and white' />
        </div>
      </div>
    );
  }
}