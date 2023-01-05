import axios from 'axios';

// key = 32626693-37bc96ab6bf8bfcf28c619d39

const picturesService = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    key: '32626693-37bc96ab6bf8bfcf28c619d39',
  },
});

export const getPictures = async () => {
  const { data } = await picturesService.get('', {
    params: { q: 'duck', page: 2 },
  });
  return data;
};
