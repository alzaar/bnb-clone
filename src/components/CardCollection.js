import React from 'react';
import Card from './Card';
import BigCard from './BigCard';
const CardCollection = (props) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
      <BigCard/>
      <Card/>
      <Card/>
      </div>
    </div>
  );
}

export default CardCollection;
