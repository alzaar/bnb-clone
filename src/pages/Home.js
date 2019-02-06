import React from 'react';
import Welcome from '../components/Welcome';
import CardCollection from '../components/CardCollection';
class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Welcome/>
          <CardCollection/>
      </div>
    );
  }
}
export default Home;
