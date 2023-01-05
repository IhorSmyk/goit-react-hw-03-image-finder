import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import axios from 'axios';
import ImageGallery from './ImageGallery/ImageGallery';
// import PropTypes from 'prop-types';

// key = 32626693-37bc96ab6bf8bfcf28c619d39

class App extends Component {
  state = {
    pictures: [],
  };

  componentDidMount = async () => {
    const response = await axios.get(
      'https://pixabay.com/api/?q=cat&page=1&key=32626693-37bc96ab6bf8bfcf28c619d39&image_type=photo&orientation=horizontal&per_page=12'
    );

    // console.log(response.data.hits[0].webformatURL);
    this.setState({ pictures: response.data.hits });
    //  console.log(this.state.pictures[0]);
}


  componentDidUpdate = async () => {};

  render() {
    return (
      <>
        <Searchbar />
        <ImageGallery imageList={this.state.pictures}/>
      </>
    );
  }
}

export default App;
