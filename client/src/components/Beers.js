import React from 'react';
import axios from 'axios';
import {
  Card,
  Container,
} from 'semantic-ui-react';


class Beers extends React.Component {
  state = { beers: { entries: [] } }


  componentDidMount() {
    // if (module.hot)
    // module.hot.accept() 
      axios.get(`/api/all_beers`)
      .then( res => { this.setState({ beers: res.data }) })
      .catch(err => { console.log(err)})
    
  }

  render() {
    const { entries } = this.state.beers
  return(
    <Container>
      <Card.Group itemsPerRow={4}>
      { entries.map( r =>
      <Card key={r.name}>
      <Card.Content>
        <Card.Header>
          {r.displayed_name}
          </Card.Header>
          <Card.Description>
            {r.description}
            </Card.Description>
            </Card.Content>
            </Card>
  )}
  </Card.Group>
  </Container>
  )}
}

export default Beers;