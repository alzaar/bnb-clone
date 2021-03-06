import React from 'react';
import './css/bigcard.css';
const BigCard = (props) => {
  return(
<div className="col-10 positioning">
    <div class="card bg-dark text-white">
      <img class="card-img" src="https://picsum.photos/450/180/?random" alt="Card image"/>
      <div class="card-img-overlay">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text">Last updated 3 mins ago</p>
        <button className="btn btn-light bookButton">Book Now!</button>
      </div>
    </div>
    </div>
  );
}
export default BigCard;
