<template>
  <div class="cart-item">
    <div class="cart-image">
      <router-link :to="{ name: 'Product', params: { id: item.id } }">
        <img :src="require(`../assets/images/slider/${item.id}.jpg`)" alt="" />
      </router-link>
    </div>
    <div class="cart-details">
      <h5 class="cart-details-head">
        <router-link :to="{ name: 'Product', params: { id: item.id } }">{{
          item.name
        }}</router-link>
      </h5>
      <p class="cart-details-price">قیمت: {{ formattedPrice(item.price) }}</p>
      <p class="cart-details-number">تعداد نهایی: {{ item.quantity }}</p>
      <p class="cart-details-number">تعداد درحال ثبت: {{ quantity }}</p>
    </div>
    <div class="cart-amounts">
      <input type="number" v-model.number="quantity" />
      <button
        class="addbtn"
        @click="changeQuantity({ product: item, quantity })"
      >
        اضافه به سبد خرید
      </button>
      <button class="removebtn" @click="removeItem(item)">حذف</button>
    </div>
    <div class="cart-total">
      <h6 class="cart-total-title">جمع</h6>
      <p>{{ formattedPrice(item.price * item.quantity) }} تومان</p>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
export default {
  name: "CartItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      quantity: this.item.quantity,
    };
  },
  methods: {
    formattedPrice(price) {
      return new Intl.NumberFormat("ar-EG").format(price);
    },
    ...mapActions("cart", ["changeQuantity", "removeItem"]),
  },
};
</script>

<style scoped>
.cart-items .cart-item {
  display: flex;
  border-bottom: 1px solid #e2e2e2;
  padding: 30px 0;
}
.cart-items .cart-item .cart-image {
  width: 100%;
  max-width: 16%;
  padding: 0 20px;
}
.cart-items .cart-item .cart-image a {
  cursor: pointer;
}
.cart-items .cart-item .cart-details {
  width: 100%;
  max-width: 36%;
  border-right: 1px solid #e2e2e2;
  padding: 0 20px;
}

.cart-items .cart-item .cart-details .cart-details-head a {
  font-size: 18px;
  margin-bottom: 10px;
  line-height: 200%;
  cursor: pointer;
  color: #36b3fb;
}
.cart-items .cart-item .cart-details p {
  margin: 5px 0;
  color: rgb(71, 71, 71);
  font-size: 17px;
  font-weight: 400;
}
.cart-items .cart-item .cart-amounts {
  width: 100%;
  max-width: 30%;
  padding: 0 20px;
  border-right: 1px solid #e2e2e2;
}
.cart-items .cart-item .cart-amounts input {
  width: 100%;
  outline: none;
  padding: 5px 12px;
  color: #3a3f43;
  border: 2px solid #e2e2e2;
  border-radius: 3px;
  margin-bottom: 15px;
}
.cart-items .cart-item .cart-amounts .addbtn {
  background-color: #57baf3;
  border: 4px solid #b3ddffee;
  cursor: pointer;
  padding: 5px 10px;
  color: white;
  font-size: 18px;
  border-radius: 5px;
  margin-left: 1rem;
}
.cart-items .cart-item .cart-amounts .removebtn {
  background-color: #ff6e6e;
  cursor: pointer;
  padding: 5px 15px;
  outline: none;
  border: none;
  border-radius: 5px;
  color: white;
}
.cart-items .cart-item .cart-total {
  width: 100%;
  max-width: 18%;
  padding: 0 20px;
  border-right: 1px solid #e2e2e2;
}
.cart-items .cart-item .cart-total .cart-total-title {
  font-size: 18px;
  margin-bottom: 5px;
}

@media screen and (max-width: 1100px) {
  .cart-items .cart-item {
    flex-wrap: wrap;
  }
  .cart-items .cart-item .cart-image {
    max-width: 50%;
  }
  .cart-items .cart-item .cart-details {
    max-width: 50%;
  }
  .cart-items .cart-item .cart-amounts {
    max-width: 90%;
    width: 100%;
    border: 0;
    margin-top: 20px;
    margin-right: auto;
    margin-left: auto;
  }
  .cart-items .cart-item .cart-total {
    display: none;
  }
}
</style>