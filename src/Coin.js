import React from 'react';

function Coin({ imgSrc }) {
  // We expect the imgSrc prop to contain the full URL to the image
  const altText = `Coin side`; 

  return (
    <div>
      <img src={imgSrc} alt={altText} />
    </div>
  );
}

export default Coin;
