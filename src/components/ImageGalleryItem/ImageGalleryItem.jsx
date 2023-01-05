import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ src, alt = 'image' }) => {
  // console.log(src);
  return (
    <li className={s.item}>
      <img className={s.image} src={src} alt={alt} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default ImageGalleryItem;
