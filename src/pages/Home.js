import React from 'react';
import CardCollection from '../components/CardCollection';
import HomeNavbar from '../components/HomeNavbar';
import Welcome from '../components/Welcome';
class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Welcome/>
          <h3 className="container">Places to stay at...</h3>
        <CardCollection/>
      </div>
    );
  }
}
export default Home;
