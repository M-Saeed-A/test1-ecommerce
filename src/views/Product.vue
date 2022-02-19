<template>
  <div class="container">
    <h1>{{ product.name }}</h1>
    <button @click="addItem(product)">ثبت سفاش</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Product",
  data: () => ({
    product: [],
  }),

  methods: {
    ...mapActions("cart", ["addItem"]),
  },

  async created() {
    await this.$store.dispatch("products/getProducts").then(() => {
      this.product = this.$store.getters["products/find_Product"](
        parseInt(this.$route.params.id)
      );
    });
  },
};
</script>

<style scoped>
.container {
  background: white;
  margin: 50px auto;
  max-width: 500px;
  text-align: center;
  padding: 20px;
  box-shadow: 0 2px 10px rgb(206, 206, 206);
  border-radius: 10px;
}
.container h1 {
  color: rgb(100, 100, 100);
  font-size: 2rem;
  margin: 10px 0;
  font-weight: 500;
}
.container button {
  background: transparent;
  outline: none;
  border: 2px solid rgb(216, 216, 216);
  padding: 5px 20px;
  border-radius: 10px;
  cursor: pointer;
  color: #6c757d;
  font-size: 17px;
  margin-top: 10px;
}
</style>