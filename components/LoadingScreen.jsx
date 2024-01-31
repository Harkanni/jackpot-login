import React from 'react';
import ReactLoading from 'react-loading';

const LoadingScreen = ({ type, color }) => {
  return (
    <div className='loading'>
      LoadingScreen
      <ReactLoading type={type} color={color} height={30} width={30} className='ml-2' />
    </div>
  );
};

export default LoadingScreen;
