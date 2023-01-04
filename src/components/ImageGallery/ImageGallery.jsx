import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

const ImageGallery = ({ imageList }) => {
  return (
    <ul className={s.imageGallery}>
      {imageList.map(({ id, src, alt }) => {
        return <ImageGalleryItem id={id} src={src} alt={alt} />;
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  imageList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default ImageGallery;
