export const mutations = {
  ADD_PRODUCT(state, payload) {
    const product = state.items.find((product) => product.id === payload.id);
    if (product) {
      product.quantity++;
    } else {
      state.items.push({ ...payload, quantity: 1 });
    }
  },
  CHANGE_QUANTITY(state, payload) {
    const product = state.items.find(
      (product) => product.id === payload.product.id
    );

    product.quantity = payload.quantity;
  },
  REMOVE_ITEM(state, payload) {
    state.items = state.items.filter((item) => item.id !== payload.id);
  }
};
