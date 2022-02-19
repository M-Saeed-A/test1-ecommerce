<template>
  <div class="search-container">
    <div class="top-content">
      <h1>به وبسایت من خوش آمدید</h1>
      <p>موارد دلخواه را سرچ کنید</p>
    </div>
    <div class="bottom-content">
      <input type="text" placeholder="جستوجو کنید..." class="search" />
      <button class="btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  </div>

  <div class="slideshow">
    <a
      class="slide"
      v-for="(slide, index) in slides"
      :key="slide.img"
      :style="index === slideShowIndex ? 'display: block' : 'display: none'"
    >
      <img :src="slide.img" alt="image" />
    </a>
    <a class="slideshow-prev" @click="move(-1)">❯</a>
    <a class="slideshow-next" @click="move(1)">❮</a>
    <div class="slideshow-items">
      <div
        class="slideshow-item"
        v-for="(slide, index) in slides"
        :key="slide.img"
      >
        <div
          class="slideshow-item-inner"
          :style="index === slideShowIndex ? `width: ${progressWidth}%` : ''"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",

  data: () => ({
    slides: [
      { img: require("../assets/images/slideshow/1.png") },
      { img: require("../assets/images/slideshow/2.png") },
      { img: require("../assets/images/slideshow/3.png") },
      { img: require("../assets/images/slideshow/4.png") },
    ],
    slideShowIndex: 0,
    progressWidth: 0,
    sliderInterval: null,
  }),

  methods: {
    move(n) {
      if (this.slideShowIndex + n > this.slides.length - 1) {
        this.slideShowIndex = 0;
      } else if (this.slideShowIndex + n < 0) {
        this.slideShowIndex = this.slides.length - 1;
      } else {
        this.slideShowIndex += n;
      }
    },
  },

  created() {
    this.sliderInterval = setInterval(() => {
      if (this.progressWidth >= 100) {
        this.progressWidth = 0;
        this.move(1);
      } else {
        this.progressWidth++;
      }
    }, 15);
  },
  unmounted() {
    clearInterval(this.sliderInterval);
  },
};
</script>


<style scoped>
.search-container {
  width: 60%;
  margin: auto;
  text-align: center;
  margin-top: 200px;
  max-width: 900px;
}
.search-container .top-content {
  margin-bottom: 40px;
}
.search-container .top-content h1 {
  color: #6c757d;
  margin-bottom: 10px;
}
.search-container .top-content p {
  color: #6c757d;
}
.search-container .bottom-content {
  display: flex;
  background-color: white;
  border-radius: 50px;
  overflow: hidden;
  padding: 5px 10px;
  box-shadow: 0 5px 35px rgb(0 0 0 / 7%);
}
.search-container .bottom-content .search {
  width: 100%;
  padding: 10px 20px;
  outline: none;
  border: none;
  color: #6c757d;
  font-size: 16px;
}
.search-container .bottom-content .btn {
  background-color: #57baf3;
  border: 4px solid #b3ddffee;
  border-radius: 100%;
  outline: none;
  color: white;
  cursor: pointer;
  padding: 10px;
  display: flex;
}
.search-container .bottom-content .icon {
  width: 25px;
  height: 25px;
}
.slideshow {
  display: flex;
  margin: 150px 5%;
  position: relative;
  flex-direction: column;
}
.slideshow .slideshow-prev {
  position: absolute;
  left: 0;
  top: 45%;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: transform 0.4s ease;
  cursor: pointer;
}

.slideshow .slideshow-next {
  position: absolute;
  right: 0;
  top: 45%;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: transform 0.4s ease;
  cursor: pointer;
}
.slideshow:hover .slideshow-prev {
  transform: translateX(20px);
  opacity: 1;
}
.slideshow:hover .slideshow-next {
  transform: translateX(-20px);
  opacity: 1;
}
.slideshow-items {
  display: flex;
  width: 100%;
  max-width: 70%;
  justify-content: center;
  align-items: center;
  height: 15px;
  background-color: white;
  margin: 20px auto 0 auto;
  border-radius: 40px;
  box-shadow: 0 1px 2px 0 rgb(25 25 25 / 20%);
  padding: 7px 5px;
  direction: ltr;
  opacity: 0;
  transition: transform 0.4s ease;
}
.slideshow-items .slideshow-item {
  width: 100%;
  margin: 5px 3px;
  background-color: #ccc;
  border-radius: 40px;
  direction: ltr;
}
.slideshow-items .slideshow-item-inner {
  border-radius: 40px;
  height: 5px;
  background-color: #7b7b7b;
  width: 0%;
}
.slideshow:hover .slideshow-items {
  opacity: 1;
  transform: translateY(-65px);
}
@media only screen and (max-width: 1100px) {
  .search-container {
    width: 95%;
  }
  .search-container h1 {
    font-size: 25px;
  }
}
</style>