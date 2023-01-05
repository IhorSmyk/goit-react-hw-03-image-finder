import { Component } from 'react';
import { getPictures } from 'services/pictures.service';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
// import PropTypes from 'prop-types';

class App extends Component {
  state = {
    pictures: [],
    request: '',
    page: 1,
  };

  setRequestWord = word => {
    this.setState({request: word.toLowerCase()});
  };

  componentDidUpdate = async (_, prevState) => {
    if (prevState.page !== this.state.page) {
      try {
        const receivedPictures = await getPictures(this.state.request, this.state.page);
        const pictures = receivedPictures.hits.map(
          ({ id, webformatURL, largeImageURL, tags }) => {
            return { id, webformatURL, largeImageURL, tags };
          }
        );
        this.setState(prev => ({ pictures: [...prev.pictures, ...pictures] }));
      } catch (err) {
        console.log(err.message);
      }
    }
  };

  handleChangePage = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  render() {
    return (
      <>
        <Searchbar search={this.setRequestWord} />
        <ImageGallery imageList={this.state.pictures} />
        <Button loadMore={this.handleChangePage} />
      </>
    );
  }
}

export default App;
