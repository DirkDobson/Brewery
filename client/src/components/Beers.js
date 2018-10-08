import React from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import {
  Card,
  Container,
 // Image,
} from 'semantic-ui-react';


class Beers extends React.Component {
  state = { 
    beers: { entries: [] },
 }


  componentDidMount() { 
      axios.get(`/api/all_beers`)
      .then( res => { this.setState({ beers: res.data }) })
      .catch(err => { console.log(err)})
    
  }

  render() {
    const { entries } = this.state.beers
  return(
    <Container>
      <Card.Group itemsPerRow={1}>
      { entries.map( r =>
      <Card key={r.name}>
        {/* <Image src={r.labels["large"]} />  */}
        <Card.Content>
          <Card.Header>
           {r.name_display}
            </Card.Header>
           <Card.Description>
             {r.description}
           </Card.Description>
          </Card.Content>
        </Card>
  )}
  </Card.Group>
  <ReactPaginate />
  </Container>
  )}
}

export default Beers;