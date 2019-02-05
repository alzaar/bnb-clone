import React from 'react';
import SearchOption from './SearchOption';
import './css/welcome.css'
class Welcome extends React.Component {


  render() {
    return (
      <div>
        <div class="bg-img">
          <div>
            <div>
              <a className="link" href="#home">Home</a>
              <a className="link" href="#about">About</a>
            </div>
          </div>
          <SearchOption/>
        </div>
      </div>
    );
  }
}

export default Welcome;
