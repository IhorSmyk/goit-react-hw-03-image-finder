import { Component } from 'react';
import { APP_STATE } from '../constants/appState';
import { FETCH_STATUS } from '../constants/fetchStatus';
import { getPictures } from 'services/pictures.service';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

class App extends Component {
  state = {
    ...APP_STATE,
  };

  setRequest = word => {
    if (word === '') {
      Notify.warning('Enter a name for the image!');
    } else if (word !== this.state.request) {
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

        //copy only the required properties
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
        Notify.failure('Something went wrong!');
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

        {this.state.status === FETCH_STATUS.Loading && <Loader />}

        <ImageGallery imageList={this.state.pictures} />

        {this.state.pictures.length >= 12 && (
          <Button loadMore={this.handleChangePage} />
        )}
      </>
    );
  }
}

export default App;
