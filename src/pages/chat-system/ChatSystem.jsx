import React from 'react';
import ContentHeader from '../../components/content-header/ContentHeader';
import './ChatSystem.css';

function ChatSystem() {
  return (
    <div className='ChatSystem'>
      <ContentHeader title='Cadu fofoqueiro!' subtitle='Cria um chat pro pai saber das fofocas!' />

      <div className='row m-0 w-100'>
        <div className='card col-12 col-sm-6 col-lg-4'>
          <p>Nome da Sala</p>
        </div>

        <div className='card col-12 col-sm-6 col-lg-4'>
          <p>Nome da Sala</p>
        </div>

        <div className='card col-12 col-sm-6 col-lg-4'>
          <p>Nome da Sala</p>
        </div>
      </div>
    </div>
  );
}

export default ChatSystem;
