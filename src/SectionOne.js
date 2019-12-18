import React, { Component } from 'react';
import fourPic from './imgs/4pic.jpg';

export default class Header extends Component {
  render() {
    return (
    	<div className='section-1'>
    	  <div className='section-1__block-1'>
    	    <div className='section-1__img'></div>
    	    <div className='section-1__text'>
            <div className='section-1__h2'>
              Я лишь хочу захватить секундную часть реальности
            </div>
            <div className='section-1__paragraph'>
              Я начала фотографировать, когда была подростком. 
              Среди прочих увлечений, которые быстро забывались,
              фотография надолго вошла в мою жизнь и стала ее неотъемлимой частью.
            </div>
          </div>
    	  </div>
    	  <div className='section-1__block-2'>
    	    <div className='section-1__text section-1__text_bottom'>
    	      <div className='section-1__h3'>— Видео с фотосессий</div>
    	      <div className='section-1__h2 section-1__h2_bottom'>
    	        Я люблю людей, которых фотографирую.
    	        Я имею в виду, что они мои друзья, через свои фотографии я живу с ними
    	      </div>
    	    </div>
          <div className='section-1__videos'>
            <img className='section-1__current-video' src={fourPic} alt='freezing girl' />
            <div className='section-1__next-video'></div>
          </div>
          <div className='section-1__switches'>
            <div className='section-1__switch section-1__switch_left'></div>
            <div className='section-1__switch'></div>
          </div>
    	  </div>
    	</div>
    );
  }
}