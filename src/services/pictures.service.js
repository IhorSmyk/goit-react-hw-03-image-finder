import axios from 'axios';

export const getPictures = async () => {
const { data } = await axios.get(
  'https://pixabay.com/api/?q=cat&page=1&key=32626693-37bc96ab6bf8bfcf28c619d39&image_type=photo&orientation=horizontal&per_page=12'
    );
    return data;
}