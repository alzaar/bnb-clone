import React from 'react';
import Card from './Card';
import BigCard from './BigCard';
const CardCollection = (props) => {
  return (
    <div className="container">
      <div className="row">
        <BigCard/>
        <BigCard/>
        <BigCard/>
        <BigCard/>
      </div>
    </div>
  );
}

export default CardCollection;
