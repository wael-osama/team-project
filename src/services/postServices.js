import { api } from 'src/boot/axios';

export default {
  getPosts: () => { api.get('/posts'); },
};
