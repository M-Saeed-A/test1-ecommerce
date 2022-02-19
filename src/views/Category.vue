<template>
  <div class="container">
    <div class="sidebar">
      <div class="box filters-box" v-show="selectedFilters.length > 0">
        <div class="filters-box-header">
          <span>فیلتر های اعمال شده</span>
          <button @click="removeAll">حذف همه</button>
        </div>
        <ul class="show-filters">
          <li v-for="filter in selectedFilters" :key="filter">
            <span>{{ filter }}</span>
            <button @click="removeFilter(filter)">X</button>
          </li>
        </ul>
      </div>
      <!--  -->
      <div class="box brands-box">
        <div class="brands-box-header">
          <span>برندها</span>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon"
              viewBox="0 0 20 20"
              fill="currentColor"
              :class="{ 'arrow-toggle': isBrand }"
              @click="isBrand = !isBrand"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <ul class="brand-box-filters" :class="{ active: isBrand }">
          <li>
            <label>
              <div class="checkbox">
                <input
                  type="checkbox"
                  value="سامسونگ"
                  v-model="selectedFilters"
                />
                <span class="checkmark"></span>
                <span>سامسونگ</span>
              </div>
              <span>Sumsung</span>
            </label>
          </li>
          <li>
            <label>
              <div class="checkbox">
                <input type="checkbox" value="سونی" v-model="selectedFilters" />
                <span class="checkmark"></span>
                <span>سونی</span>
              </div>
              <span>sony</span>
            </label>
          </li>
          <li>
            <label>
              <div class="checkbox">
                <input type="checkbox" value="اپل" v-model="selectedFilters" />
                <span class="checkmark"></span>
                <span>اپل</span>
              </div>
              <span>apple</span>
            </label>
          </li>
        </ul>
      </div>
      <div class="box colors-box">
        <div class="colors-box-header">
          <span>برند ها</span>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon"
              viewBox="0 0 20 20"
              fill="currentColor"
              :class="{ 'arrow-toggle': isColor }"
              @click="isColor = !isColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <ul class="colors-box-filters" :class="{ active: isColor }">
          <li>
            <label>
              <div class="checkbox">
                <input type="checkbox" value="مشکی" v-model="selectedFilters" />
                <span class="checkmark"></span>
                <span>مشکی</span>
              </div>
              <span class="black-color"></span>
            </label>
          </li>

          <li>
            <label>
              <div class="checkbox">
                <input type="checkbox" value="آبی" v-model="selectedFilters" />
                <span class="checkmark"></span>
                <span>آبی</span>
              </div>
              <span class="blue-color"></span>
            </label>
          </li>
        </ul>
      </div>
      <div class="box switcher-box">
        <label>
          <div class="switch">
            <input type="checkbox" class="checkbox" />
            <span class="slider"></span>
          </div>
          <span>فقط کالاهای موجود</span>
        </label>
      </div>
    </div>
    <div class="content">
      <div class="products">
        <router-link
          :to="{ name: 'Product', params: { id: product.id } }"
          class="card"
          v-for="product in products"
          :key="product.id"
        >
          <div class="card-image">
            <img
              :src="require(`../assets/images/slider/${product.id}.jpg`)"
              alt="product"
            />
          </div>
          <div class="card-title">{{ product.name }}</div>
          <div class="card-price">{{ product.price }} تومان</div>
          <span class="card-discount">%6</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Category",
  data: () => ({
    isBrand: true,
    isColor: true,
    selectedFilters: [],
  }),

  computed: {
    ...mapState("products", ["products"]),
  },

  methods: {
    ...mapActions("products", ["getProducts"]),
    removeAll() {
      this.selectedFilters = [];
    },
    removeFilter(filter) {
      this.selectedFilters = this.selectedFilters.filter(
        (item) => item !== filter
      );
    },
  },

  created() {
    this.getProducts();
  },
};
</script>

<style scoped>
.container {
  display: flex;
  margin: 60px 5%;
  flex-wrap: wrap;
}

.sidebar {
  width: 100%;
  max-width: 25%;
}
.content {
  width: 100%;
  max-width: 75%;
}
.content .products {
  display: flex;
  flex-wrap: wrap;
}
.card {
  background-color: white;
  width: 100%;
  max-width: 25%;
  padding: 40px;
  cursor: pointer;
  border-radius: 3px;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
}
.card:hover {
  box-shadow: 0 2px 17px 0 rgba(0, 0, 0, 0.09);
  z-index: 11;
}
.card .card-image {
  width: 210px;
  min-height: 180px;
  max-width: 100%;
}
.card .card-discount {
  position: absolute;
  background-color: #ff6e6e;
  color: #fff;
  border-radius: 5px;
  padding: 3px 7px;
  padding-top: 7px;
  display: inline-block;
  text-align: center;
  top: 10px;
  right: 20px;
  font-size: 14px;
}
.card-title {
  color: #6c757d;
  font-size: 14px;
  margin: 20px 0;
}
.card-price {
  color: #61acfd;
}
.sidebar {
  display: flex;
  flex-direction: column;
  padding-left: 10px;
}
.box {
  background-color: white;
  box-shadow: 0 3px 25px rgb(0 0 0 / 7%);
  margin: 0 0 10px 0;
  padding: 10px 15px;
  border-radius: 2px;
}
.filters-box {
  display: flex;
  flex-direction: column;
}
.filters-box .filters-box-header {
  display: flex;
  justify-content: space-between;
  padding: 18px 0;
  border-bottom: 1px solid rgb(216, 216, 216);
}
.filters-box .filters-box-header span {
  color: #6c757d;
  font-size: 13px;
}
.filters-box .filters-box-header button {
  color: red;
  background-color: transparent;
  outline: none;
  border: none;
}
.filters-box .show-filters {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}
.filters-box .show-filters li {
  border: 1px solid rgb(216, 216, 216);
  padding: 5px 10px;
  color: #6c757d;
  font-size: 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4px;
  border-radius: 3px;
}
.filters-box .show-filters button {
  background-color: transparent;
  outline: none;
  border: none;
  margin-right: 9px;
  font-weight: 200;
  color: #7a7f85;
  font-size: 12px;
  cursor: pointer;
}
.brands-box {
  display: flex;
  flex-direction: column;
}

.brands-box .brands-box-header {
  display: flex;
  justify-content: space-between;
}
.brands-box .brands-box-header button {
  background-color: transparent;
  outline: none;
  border: none;
  font-weight: 200;
  color: #7a7f85;
  font-size: 12px;
  cursor: pointer;
}
.brands-box .brands-box-header .icon {
  width: 25px;
  height: 25px;
  transition: transform 0.4s ease;
}
.brands-box .brands-box-header .icon.arrow-toggle {
  transform: rotate(180deg);
}
.brands-box .brand-box-filters {
  display: none;
  flex-direction: column;
  margin-top: 30px;
}
.brands-box .brand-box-filters.active {
  display: flex;
}
.brands-box .brand-box-filters li {
  margin: 4px 0;
}
.brands-box .brand-box-filters label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #3a3f43;
}
.brands-box .brand-box-filters label input {
  display: none;
}
.brands-box .brand-box-filters label .checkbox {
  display: flex;
  align-items: center;
  position: relative;
}
.brands-box .brand-box-filters label .checkmark {
  width: 22px;
  height: 22px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: inline-block;
  margin-left: 10px;
  position: relative;
}
.brands-box .brand-box-filters label > span {
  color: #6c757d;
  font-size: 12px;
}
.brands-box .brand-box-filters label .checkmark::after {
  content: "";
  position: absolute;
  top: 2px;
  left: 6px;
  width: 5px;
  height: 10px;
  border: solid #fff;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
  display: none;
}

.brands-box .brand-box-filters label input:checked ~ .checkmark {
  background-color: #46b1ef;
}
.brands-box .brand-box-filters label input:checked ~ .checkmark::after {
  display: block;
}

.colors-box {
  display: flex;
  flex-direction: column;
}
.colors-box .colors-box-header {
  display: flex;
  justify-content: space-between;
}
.colors-box .colors-box-header button {
  background-color: transparent;
  outline: none;
  border: none;
  font-weight: 200;
  color: #7a7f85;
  font-size: 12px;
  cursor: pointer;
}
.colors-box .colors-box-header .icon {
  width: 25px;
  height: 25px;
  transition: transform 0.4s ease;
}
.colors-box .colors-box-header .icon.arrow-toggle {
  transform: rotate(180deg);
}
/*  */
.colors-box .colors-box-filters {
  margin-top: 30px;
  display: none;
  flex-direction: column;
}
.colors-box .colors-box-filters.active {
  display: flex;
}
.colors-box .colors-box-filters li {
  margin: 4px 0;
}
.colors-box .colors-box-filters label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #3a3f43;
}
.colors-box .colors-box-filters label input {
  display: none;
}
.colors-box .colors-box-filters label .checkbox {
  display: flex;
  align-items: center;
  position: relative;
}
.colors-box .colors-box-filters label .checkmark {
  width: 22px;
  height: 22px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: inline-block;
  margin-left: 10px;
  position: relative;
}
.colors-box .colors-box-filters label .checkmark::after {
  content: "";
  position: absolute;
  top: 2px;
  left: 6px;
  width: 5px;
  height: 10px;
  border: solid #fff;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
  display: none;
}
.colors-box .colors-box-filters label .black-color {
  background-color: black;
  width: 10px;
  height: 10px;
  display: inline-block;
  border-radius: 100%;
}
.colors-box .colors-box-filters label .blue-color {
  background-color: blue;
  width: 10px;
  height: 10px;
  display: inline-block;
  border-radius: 100%;
}
.colors-box .colors-box-filters label input:checked ~ .checkmark {
  background-color: #46b1ef;
}
.colors-box .colors-box-filters label input:checked ~ .checkmark::after {
  display: block;
}

/*  */
.switcher-box {
  display: flex;
}
.switcher-box label {
  display: flex;
  color: #6c757d;
}
.switcher-box label > span {
  margin-right: 10px;
  font-size: 13px;
}
.switcher-box .switch {
  width: 40px;
  height: 21px;
  display: inline-block;
  position: relative;
}
.switcher-box .checkbox {
  display: none;
}
.switcher-box .slider {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: rgb(230, 230, 230);
  border-radius: 40px;
}
.switcher-box .slider::before {
  position: absolute;
  content: "";
  left: 2px;
  top: 2px;
  width: 15px;
  height: 15px;
  background-color: rgb(255, 255, 255);
  border-radius: 40px;
  border: 1px solid rgb(145, 145, 145);
}
.switcher-box .checkbox:checked + .slider {
  background-color: #46b1ef;
}
.switcher-box .checkbox:checked + .slider::before {
  transform: translateX(18px);
}

@media only screen and (max-width: 1100px) {
  .sidebar {
    max-width: 100%;
  }
  .content {
    max-width: 100%;
  }
}
@media only screen and (max-width: 900px) {
  .card {
    max-width: 50%;
  }
}
@media only screen and (max-width: 750px) {
  .card {
    max-width: 100%;
  }
}
</style>