import React from 'react';
import Hobby from './Hobby';

function HobbyList() {
  const hobbies = ['Surfing', 'Rock climbing', 'Mountain biking', 'Breakdancing'];

  return hobbies.map((hobby, i) => <Hobby hobby={hobby} key={i} />);
}

export default HobbyList;
