import React, { useState } from 'react';
import Coin from './Coin';

// Since the images are in the public folder, we can reference them by their public URL paths
const headsImg = '/HEADS.jpg';
const tailsImg = '/TAILS.jpg';

function CoinFlipper() {
  const [flipCount, setFlipCount] = useState({ heads: 0, tails: 0 });
  const [currentSide, setCurrentSide] = useState(null);

  const flipCoin = () => {
    const isHeads = Math.random() < 0.5;
    setCurrentSide(isHeads ? headsImg : tailsImg); // Update to use image URLs
    setFlipCount(prevFlipCount => ({
      ...prevFlipCount,
      [isHeads ? 'heads' : 'tails']: prevFlipCount[isHeads ? 'heads' : 'tails'] + 1
    }));
  };

  return (
    <div>
      <h2>Let's flip a coin!</h2>
      {currentSide && <Coin imgSrc={currentSide} />} {/* Pass the image source to the Coin component */}
      <button onClick={flipCoin}>Flip Coin</button>
      <p>Heads: {flipCount.heads}</p>
      <p>Tails: {flipCount.tails}</p>
    </div>
  );
}

export default CoinFlipper;
