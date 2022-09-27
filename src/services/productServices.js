import { api } from 'src/boot/axios';

export default {
  all: () => api.get('/products'),
  categories: (path) => api.get(`/products/category${path}`),
};
