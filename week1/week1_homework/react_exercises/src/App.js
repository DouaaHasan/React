import React from 'react';
import './App.css';

// components
import HobbyList from './component/exercise1/HobbyList';
import Guarantee from './component/exercise2/Guarantee';
import Counter from './component/exercise3/Counter';
// images
import chat from './component/exercise2/chat.png';
import coin from './component/exercise2/coin.png';
import fDelivery from './component/exercise2/f-delivery.png';

function App() {
  const guaranteeItems = [
    {
      img: chat,
      title: 'Free Shipping',
      description: 'Free shipping for all your orders',
    },
    {
      img: coin,
      title: '100% money back',
      description: 'Get your money back',
    },
    {
      img: fDelivery,
      title: 'Online Support 24/7',
      description: 'Our support team are ready to help you all the time',
    },
  ];
  return (
    <div className='App'>
      <HobbyList />
      <div style={{ display: 'flex', justifyContent: 'space-around', margin: '5%' }}>
        {guaranteeItems.map((guaranteeItem, i) => (
          <Guarantee key={i} guaranteeItem={guaranteeItem} />
        ))}
      </div>
      <Counter />
    </div>
  );
}

export default App;
