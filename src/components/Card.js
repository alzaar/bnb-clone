import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <link href="https://fonts.googleapis.com/css?family=Roboto:300:400:700" rel="stylesheet">
        <div className="cards clearfix">
          <div className="card-col-1"></div>
          <div className="card-col-2"></div>
          <div className="card-col-3"></div>
        </div>
    );
  }
}
