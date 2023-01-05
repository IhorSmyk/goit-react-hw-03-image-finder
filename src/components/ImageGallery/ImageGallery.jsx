import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

const ImageGallery = ({ imageList }) => {
  return (
    <ul className={s.imageGallery}>
      {imageList?.map(({ id, webformatURL, tags }) => {
        return <ImageGalleryItem key={id} src={webformatURL} alt={tags} />;
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  imageList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string,
    })
  )
};

export default ImageGallery;
