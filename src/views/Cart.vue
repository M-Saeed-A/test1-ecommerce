<template>
  <div class="cart">
    <h1 class="cart-title">سبد خرید</h1>
    <div class="cart-items">
      <p class="empty-cart" v-if="items.length < 1">سبد شما خالی است</p>
      <CartItem v-for="item in items" :key="item.id" :item="item" />
    </div>

    <div class="cart-info">
      <table>
        <tbody>
          <tr>
            <th>جمع کل</th>
            <td>{{ formattedPrice(subtotal) }} تومان</td>
          </tr>
          <tr>
            <th>مالیات</th>
            <td>{{ formattedPrice(tax) }} تومان</td>
          </tr>
          <tr>
            <th>تخفیف</th>
            <td class="text-red">0 تومان</td>
          </tr>
          <tr>
            <th>قابل پرداخت</th>
            <td class="text-blue">{{ formattedPrice(total) }} تومان</td>
          </tr>
        </tbody>
      </table>
    </div>
    <button class="final-btn">ثبت سفارش</button>
  </div>
</template>

<script>
import CartItem from "../components/CartItem.vue";
import { mapState, mapGetters } from "vuex";
export default {
  name: "Cart",

  computed: {
    ...mapState("cart", ["items"]),
    ...mapGetters("cart", ["subtotal", "tax", "total"]),
  },
  methods: {
    formattedPrice(price) {
      return new Intl.NumberFormat("ar-EG").format(price);
    },
  },

  components: {
    CartItem,
  },
};
</script>

<style scoped>
.empty-cart {
  color: #e74c3c;
  font-size: 18px;
}
.cart {
  background-color: white;
  margin: 40px 5%;
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 6px;
}
.cart .cart-title {
  color: #6c757d;
  font-size: 30px;
  font-weight: 700;
  border-bottom: 1px solid #e2e2e2;
  padding-bottom: 20px;
}

.cart .cart-items {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
}
.cart-info {
  width: 100%;
  max-width: 60%;

  margin: auto;
  margin-top: 30px;
}
.cart-info table {
  width: 100%;
  border: 1px solid #f0f0f5;
  color: #6c757d;
  border: 1px solid #f0f0f5;
  border-collapse: collapse;
  text-align: center;
}
.cart-info table td,
table th {
  padding: 0.75rem;
  border-top: 1px solid #f0f0f5;
}
.cart-info table tr:nth-child(odd) {
  background-color: #f9f9f9;
}
.cart-info .text-red {
  color: #ff6e6e;
}
.cart-info .text-blue {
  color: #36b3fb;
}

.final-btn {
  width: 10%;
  min-width: 150px;
  margin: 30px auto 0 auto;
  background-color: #57baf3;
  border: 4px solid #b3ddffee;
  border-radius: 4px;
  color: white;
  white-space: nowrap;
  font-size: 16px;
  padding: 5px 10px;
  cursor: pointer;
}
@media only screen and (max-width: 1100px) {
  .cart-info {
    max-width: 100%;
  }
}
</style>