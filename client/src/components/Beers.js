import React from 'react';
import axios from 'axios';

class Beers extends React.Component {
  state = { beers: '' }


  componentDidMount() {
    axios.get(`/api/all_beers`)
      .then( res => this.setState({ beers: res.data }) )
  }

  mapBeers = () => {
    const { beers } = this.state
    return beers.map( r => {
      <li>r</li>
    })
  }

  render() {
  const { beers } = this.state
  return(
    <div>
      <beers></beers>
    </div>
  )
  }
}

export default Beers;