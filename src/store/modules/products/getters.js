export const getters = {
  find_Product: (state) => (id) => {
    return state.products.find((item) => item.id === id);
  }
};
