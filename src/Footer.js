import React, { Component } from 'react';
import sevenPic from './imgs/7pic.jpg';

export default class Header extends Component {
  render() {
    return (
    	<div className='footer'>
    	  <div className='footer__block-1'>
    	    <div className='footer__text'>
    	      <div className='footer__h3'>отзывы</div>
    	      <div className='footer__h2'>
    	        "Мне сложно видеть себя на фото.
    	        То что обычно получается, не похоже на то,
    	        какой мне хотелось бы себя видеть...”
    	      </div>
    	      <div className='footer__signature'>Полина Кузина</div>
    	      <div className='footer__switches'>
              <div className='footer__switch footer__switch_left'></div>
              <div className='footer__switch'></div>
            </div>
          </div>
          <img className='footer__img' src={sevenPic} alt='girl in a sweater' />
    	  </div>
        <div className='footer__block-2'>
          <div className='footer__container-flex'>
            <div className='footer__menu'>
              <ul className='footer__ul'>
                <li className='footer__li footer__li_label'><a className='footer__link' href='#home'>GM photos</a></li>
                <li className='footer__li'><a className='footer__link' href='#works'>Портфолио</a></li>
                <li className='footer__li'><a className='footer__link' href='#prices'>Цены</a></li>
                <li className='footer__li'><a className='footer__link' href='#contacts'>Контакты</a></li>
              </ul>
            </div>
            <div className='footer__feedback'>
              <form className='footer__form'>
                <input type='text' placeholder='Your email' className='footer__input' />
                <button className='footer__button'>Отправить</button>
              </form>
            </div>
          </div>
          <div className='footer__line'></div>
          <div>
            <ul className='footer__ul footer__ul_social-networks'>
              <li className='footer__li footer__li_social'><i className='fab fa-twitter'></i></li>
              <li className='footer__li footer__li_social'><i className='fab fa-instagram'></i></li>
              <li className='footer__li footer__li_social'><i className='fab fa-google'></i></li>
              <li className='footer__li footer__li_social'><i className='fab fa-facebook-f'></i></li>
            </ul>
          </div>
        </div>
    	</div>
    );
  }
}