import React, { Component } from 'react';
import sky from './imgs/sky.jpg';
import sixPic from './imgs/6pic.jpg';
import gal1 from './imgs/gallery-1.jpg';
import gal2 from './imgs/gallery-2.jpg';
import gal3 from './imgs/gallery-3.jpg';
import gal4 from './imgs/gallery-4.jpg';
import gal5 from './imgs/gallery-5.jpg';
import gal6 from './imgs/gallery-6.jpg';

export default class Header extends Component {
  render() {
    return (
    	<div className='section-2'>
    	  <div className='section-2__block-1'>
    	    <div className='section-2__imgs'>
            <img className='section-2__sky' src={sky} alt='sky' />
            <img className='section-2__guy' src={sixPic} alt='smoking guy' />
          </div>
    	    <div className='section-2__text'>
            <div className='section-2__h2'>
              Как проходит фотосессия
            </div>
            <div className='section-2__paragraph'>
              Мы заранее обсуждаем результат, которого вы хотите добиться,
              ищем локацию и продумываем ваш образ до мелочей.<br />
              В фотосессию включено время для расслабления и адаптации,
              ведь в конечном счете, фотография о том, кто вы есть.
              Это правда по отношению к себе и именно ее мы будем искать.
            </div>
    	    </div>
    	  </div>
        <div className='section-2__block-2'>
          <div className='section-2__h3'>— Портфолио</div>
          <div className='section-2__links'>
            <ul className='section-2__ul'>
              <li className='section-2__li'><a className='section-2__link' href='#all_photos'>Все фотографии</a></li>
              <li className='section-2__li'><a className='section-2__link' href='#portrait_photo'>Портретная съемка</a></li>
              <li className='section-2__li'><a className='section-2__link' href='#love_stories'>Истории любви</a></li>
              <li className='section-2__li'><a className='section-2__link' href='#reportages'>Репортажи</a></li>
              <li className='section-2__li'><a className='section-2__link' href='#projects'>Проекты</a></li>
            </ul>
          </div>
          <div className='section-2__gallery'>
            <div className='section-2__photo'>
              <a className='section-2__img-link' href={gal1}>
                <img className='section-2__img' src={gal1} alt='girl in a dress' />
              </a>
            </div>
            <div className='section-2__photo'>
              <a className='section-2__img-link' href={gal2}>
                <img className='section-2__img' src={gal2} alt='girl in a glasses' />
              </a>
            </div>
            <div className='section-2__photo'>
              <a className='section-2__img-link' href={gal3}>
                <img className='section-2__img' src={gal3} alt='smoking guy' />
              </a>
            </div>
            <div className='section-2__photo'>
              <a className='section-2__img-link' href={gal4}>
                <img className='section-2__img' src={gal4} alt='girl in swimsuit' />
              </a>
            </div>
            <div className='section-2__photo'>
              <a className='section-2__img-link' href={gal5}>
                <img className='section-2__img' src={gal5} alt='crying girl' />
              </a>
            </div>
            <div className='section-2__photo'>
              <a className='section-2__img-link' href={gal6}>
                <img className='section-2__img' src={gal6} alt='girl in a hat' />
              </a>
            </div>
          </div>
          <div className='section-2__button-position'>
            <button className='section-2__button'>
              Посмотреть все работы
            </button>
          </div>
        </div>
    	</div>
    );
  }
}