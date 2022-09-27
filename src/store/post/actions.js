import productServices from 'src/services/productServices';

export const getProducts = ({ commit }) => productServices.all()
  .then((response) => {
    commit('SET_PRODUCTS', response.data);
  });

export const updateCategory = ({ commit }, path) => productServices.categories(path)
  .then((response) => {
    commit('SET_CATEGORY', response.data);
  });
