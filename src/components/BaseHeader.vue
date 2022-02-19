<template>
  <header class="header">
    <div class="logo-container">
      <a class="logo"></a>
    </div>

    <nav class="navbar" :class="[active, { menu_active: isMenu }]">
      <router-link
        :to="{ name: 'Home' }"
        class="nav-item home"
        @click="makeActive('home')"
        >صفحه اصلی</router-link
      >
      <a class="nav-item about" @click="makeActive('about')">درباره ما</a>
      <router-link
        :to="{ name: 'Category' }"
        class="nav-item category"
        @click="makeActive('category')"
        >دسته بندی</router-link
      >
      <a class="nav-item contact" @click="makeActive('contact')">تماس با ما</a>
    </nav>

    <div class="navbar-icons">
      <div class="icon_basket-container">
        <span class="basket-count">{{ count }}</span>
        <span class="icon_basket" @click="showDropBasket">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </span>
        <div class="dropdown-basket-container" :class="{ isbasket: isBasket }">
          <div class="dropdown-basket">
            <div class="basket-items" v-for="item in items" :key="item.id">
              <div class="basket-image">
                <a>
                  <img
                    :src="require(`../assets/images/slider/${item.id}.jpg`)"
                    alt="image"
                  />
                </a>
              </div>
              <div class="basket-details">
                <h4>
                  <a class="basket-title"
                    >{{ item.name }} ({{ item.quantity }})</a
                  >
                </h4>
                <div class="basket-price">{{ item.price }} تومان</div>
                <button class="basket-remove" @click="removeItem(item)">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="delete-icon"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  حذف
                </button>
              </div>
            </div>
            <router-link :to="{ name: 'Cart' }" class="basket-btn"
              >ثبت و نهایی کردن سفارش</router-link
            >
          </div>
        </div>
      </div>

      <div class="icon_account-container">
        <span class="icon_account" @click="showDropAccount">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </span>
        <div class="account_dropdown" :class="{ isaccount: isAccount }">
          <router-link :to="{ name: 'Login' }" class="acount_link"
            >ورود</router-link
          >
          <router-link :to="{ name: 'Login' }" class="acount_link"
            >ثبت نام</router-link
          >
        </div>
      </div>
      <div class="hamburger-menu" @click="isMenu = !isMenu">
        <svg
          v-show="!isMenu"
          xmlns="http://www.w3.org/2000/svg"
          class="icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-show="isMenu"
          xmlns="http://www.w3.org/2000/svg"
          class="icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          style="color: #70baea"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
  </header>
  <div class="overlay" :class="{ overlay_active: isMenu }"></div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "BaseHeader",
  data: () => ({
    active: "home",
    isMenu: false,
    isColor: true,
    isAccount: false,
    isBasket: false,
  }),

  computed: {
    ...mapState("cart", ["items"]),
    ...mapGetters("cart", ["count"]),
  },

  methods: {
    makeActive(item) {
      this.active = item;
    },
    showDropBasket() {
      this.isAccount = false;
      this.isBasket = !this.isBasket;
    },
    showDropAccount() {
      this.isBasket = false;
      this.isAccount = !this.isAccount;
    },
    eventListener(event) {
      if (
        !event.target.closest(".icon_basket-container, .icon_account-container")
      ) {
        this.isAccount = false;
        this.isBasket = false;
      }

      if (!event.target.closest(".navbar, .hamburger-menu")) {
        this.isMenu = false;
      }
    },
    ...mapActions("cart", ["removeItem"]),
  },

  mounted() {
    document.addEventListener("click", this.eventListener);
  },

  unmounted() {
    document.removeEventListener("click", this.eventListener);
  },
};
</script>

<style scoped>
.header {
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 5%;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(87, 87, 87, 0.384);
  padding: 30px 25px;
  z-index: 100;
}
.logo-container {
  width: 50px;
  height: 50px;
}
.logo {
  background: url("../assets/images/weblogo.png") center/cover no-repeat;
  width: 100%;
  height: 100%;
  display: inline-block;
}

.navbar {
  display: flex;
}
.navbar .nav-item {
  padding: 10px 30px;
  margin: 0 2px;
  font-size: 16px;
  border-radius: 6px;
  color: rgb(100, 100, 100);
  cursor: pointer;
}
.navbar .nav-item:hover {
  background-color: #f4f4f4;
  color: black;
}
.navbar-icons {
  display: flex;
}
.icon_basket {
  background-color: #f4f4f4;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  border-radius: 4px;
  cursor: pointer;
}
.icon_basket-container {
  position: relative;
}
.icon_basket-container .dropdown-basket {
  position: absolute;
  top: 130%;
  left: 10px;
  min-width: 290px;
  width: 100%;
  min-height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid rgb(218, 218, 218);
  overflow-y: auto;
  margin-top: 15px;
  max-height: 400px;
  z-index: 0;
}
/* .icon_basket-container .dropdown-basket::before {
  content: "";
  width: 12px;
  height: 12px;
  background-color: white;
  position: absolute;
  left: 18px;
  top: -7px;
  border: 1px solid rgb(218, 218, 218);
  transform: rotate(45deg);
  border-width: 1px 0 0 1px;
} */
.dropdown-basket-container {
  position: relative;
  display: none;
}
.dropdown-basket-container.isbasket {
  display: block;
}
.icon_basket-container .dropdown-basket-container::before {
  content: "";
  width: 12px;
  height: 12px;
  background-color: white;
  position: absolute;
  left: 27px;
  top: 9px;
  border: 1px solid rgb(218, 218, 218);
  transform: rotate(45deg);
  border-width: 1px 0 0 1px;
  z-index: 10;
}
.icon_basket-container .dropdown-basket .basket-items {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 25px;
}
.icon_basket-container .dropdown-basket .basket-items .basket-details {
  margin-right: 15px;
  display: flex;
  flex-direction: column;
}
.icon_basket-container .dropdown-basket .basket-items .basket-details h4 {
  color: rgb(63, 63, 63);
  font-weight: 500;
  cursor: pointer;
}
.icon_basket-container
  .dropdown-basket
  .basket-items
  .basket-details
  .basket-price {
  color: #46b1ef;
  font-weight: 300;
  margin: 10px 0;
}
.icon_basket-container
  .dropdown-basket
  .basket-items
  .basket-details
  .basket-remove {
  width: 60%;
  padding: 2px 10px;
  background-color: #f4f4f4;
  outline: none;
  border: none;
  color: #6c757d;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.icon_basket-container
  .dropdown-basket
  .basket-items
  .basket-details
  .basket-remove
  .delete-icon {
  width: 15px;
  height: 15px;
}
.icon_basket-container .dropdown-basket .basket-items .basket-image a {
  width: 90px;
  height: 90px;
  border: 1px solid rgb(218, 218, 218);
  padding: 5px;
  cursor: pointer;
}
.icon_basket-container .dropdown-basket .basket-btn {
  background-color: #57baf3;
  padding: 10px 30px;
  text-align: center;
  color: white;
  font-weight: 700;
  border-radius: 7px;
  border: 4px solid #b3ddffee;
  cursor: pointer;
}
.icon_basket-container .dropdown-basket .basket-btn:hover {
  background-color: #46b1ef;
}
.icon_account {
  background-color: #f4f4f4;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
}
.icon_account-container {
  position: relative;
}
.account_dropdown {
  position: absolute;
  background-color: white;
  display: none;
  flex-direction: column;
  width: 100%;
  top: 130%;
  left: 10px;
  min-width: 200px;

  border: 1px solid rgb(218, 218, 218);
  z-index: 10;
}
.account_dropdown.isaccount {
  display: flex;
}
.account_dropdown::before {
  content: "";
  position: absolute;
  width: 12px;
  height: 12px;
  background-color: white;
  top: -7px;
  left: 18px;
  z-index: 500;
  transform: rotate(45deg);
  border: 1px solid rgb(218, 218, 218);
  z-index: -1;
  border-width: 1px 0 0 1px;
}

.account_dropdown .acount_link {
  margin-top: 5px;
  display: inline-block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: rgb(100, 100, 100);
  cursor: pointer;
}
.account_dropdown .acount_link:last-of-type {
  margin-bottom: 5px;
}
.account_dropdown .acount_link:hover {
  background-color: #f4f4f4;
  color: black;
}
.hamburger-menu {
  background-color: #f4f4f4;
  padding: 15px;
  display: none;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
}
.icon {
  width: 20px;
  height: 20px;
  font-weight: 100;
  color: rgb(95, 95, 95);
}
.icon_basket-container .basket-count {
  position: absolute;
  background-color: red;
  left: 0;
  top: 0;
  display: inline-block;
  text-align: center;

  width: 20px;
  height: 21px;
  background-color: #46b1ef;
  color: #fff;
  border-radius: 100px;
  top: -7px;
  left: 5px;
}

@media only screen and (max-width: 1000px) {
  .hamburger-menu {
    display: flex;
  }
  .navbar {
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    background-color: white;
    height: 100%;
    width: 50%;
    min-width: 250px;
    transform: translateX(110%);
    transition: transform 0.2s ease-in-out;
    z-index: 300;
  }
  .navbar.menu_active {
    transform: translateX(0);
  }
  .navbar .nav-item {
    border-bottom: 1px solid rgb(221, 221, 221);
    padding: 10px 8px 10px 30px;
  }
  .navbar .nav-item:hover {
    background-color: #f4f4f4;
    color: black;
  }
}

.overlay {
  display: none;
  position: fixed;
  background-color: rgba(74, 74, 74, 0.43);
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  z-index: -1;
}
.overlay.overlay_active {
  display: block;
}
.navbar.home .home,
.navbar.about .about,
.navbar.category .category,
.navbar.contact .contact {
  color: #70baea;
}
@media only screen and (max-width: 500px) {
  .icon_basket-container .dropdown-basket {
    left: -91px;
    min-width: 248px;
  }
}
</style>

