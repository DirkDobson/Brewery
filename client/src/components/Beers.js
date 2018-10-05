import React from 'react';
import axios from 'axios';

class Beers extends React.Component {
  state = { beers: '' }


  componentDidMount() {
    axios.get(`/api/all_beers`)
      .then( res => this.setState({ beers: res.data }) )
  }

}

export default Beers;