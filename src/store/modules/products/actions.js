import axios from "axios";
export const actions = {
  async getProducts(context) {
    const { data } = await axios.get(
      "https://gist.githubusercontent.com/Tefoh/57a0ef76ab63a974105b9f0fbcb8475b/raw/d49e3d8104992ff6cc6742fbe91b0c642287837a/products.json"
    );
    context.commit("SET_PRODUCTS", data);
  }
};
