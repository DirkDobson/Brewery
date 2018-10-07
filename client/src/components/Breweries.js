import React from 'react';
import axios from 'axios';
import {
  Card,
  Container,
  //Image,
} from 'semantic-ui-react';

class Breweries extends React.Component {
  state = { breweries: { entries:[] } }
  
  componentDidMount() { 
    axios.get(`/api/all_breweries`)
    .then( res => { this.setState({ breweries: res.data }) })
    .catch(err => { console.log(err)})
  
  }
  render() {
      const { entries } = this.state.breweries
    return(
      <Container>
        <Card.Group itemsPerRow={1}>
      { entries.map( r =>
      <Card key={r.name}>
      {/* <Image avatar src={r.images.medium} /> */}
      <Card.Content>
        <Card.Header>
          {r.name_short_display}
          </Card.Header>
          <Card.Description>
            {r.description}
            </Card.Description>
            </Card.Content>
            </Card>
  )}
      </Card.Group>
      </Container>
    )
  }

}

export default Breweries;