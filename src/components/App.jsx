import { Component } from 'react';
import { APP_STATE } from '../constants/appState';
import { FETCH_STATUS } from '../constants/fetchStatus';
import { getPictures } from 'services/pictures.service';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import { InfinitySpin } from 'react-loader-spinner';

class App extends Component {
  state = {
    ...APP_STATE,
  };

  setRequest = word => {
    if (word !== this.state.request) {
      this.setState({ ...APP_STATE, request: word });
    }
  };

  componentDidUpdate = async (_, prevState) => {
    if (
      prevState.request !== this.state.request ||
      prevState.page !== this.state.page
    ) {
      this.setState({ status: FETCH_STATUS.Loading });
      try {
        const receivedPictures = await getPictures(
          this.state.request,
          this.state.page
        );
        const pictures = receivedPictures.hits.map(
          ({ id, webformatURL, largeImageURL, tags }) => {
            return { id, webformatURL, largeImageURL, tags };
          }
        );
        this.setState(prev => ({
          pictures: [...prev.pictures, ...pictures],
          status: FETCH_STATUS.Success,
        }));
      } catch (error) {
        this.setState({ status: FETCH_STATUS.Error });
      }
    }
  };

  handleChangePage = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  render() {
    return (
      <>
        <Searchbar search={this.setRequest} />

        {this.state.status === FETCH_STATUS.Loading && (
          <InfinitySpin color="#1b4d89" />
        )}

        <ImageGallery imageList={this.state.pictures} />
        <Button loadMore={this.handleChangePage} />

      </>
    );
  }
}

export default App;
