import React from 'react';
import './css/card.css';
const Card = (props) => {
  return (
    <div className="col-sm">
      <div class="card">
        <img class="card-img-top" src="https://picsum.photos/300/200/?random" alt="Card image cap"/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  );
}
export default Card;
