<template>
  <button class="scroll-btn" @click="goTop" v-show="isScroll">
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
        d="M5 15l7-7 7 7"
      />
    </svg>
  </button>
  <footer class="footer">
    <div class="footer_links">
      <a class="footer_link">لینک اول</a>
      <a class="footer_link">لینک دوم</a>
      <a class="footer_link">لینک سوم</a>
      <a class="footer_link">لینک چهارم</a>
      <a class="footer_link">لینک پنجم</a>
      <a class="footer_link">لینک ششم</a>
    </div>

    <div class="footer_description">
      <p>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
        درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
      </p>
    </div>

    <div class="footer-copy">
      طراحی و توسعه توسط <a style="color: white">محمد سعید امینی</a> © 1400
    </div>
  </footer>
</template>

<script>
export default {
  name: "BaseFooter",
  data: () => ({
    isScroll: false,
  }),
  methods: {
    goTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },

  mounted() {
    document.addEventListener("scroll", () => {
      this.isScroll = window.scrollY > 200;
    });
  },
};
</script>

<style scoped>
.scroll-btn {
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 8px;
  background: white;
  border-radius: 10px;
  display: flex;
  border: 1px solid silver;
  outline: none;
  margin: 20px;
  box-shadow: 0 2px 10px rgb(66, 66, 66);
}
.scroll-btn .icon {
  width: 25px;
  height: 25px;
}
.footer {
  display: flex;
  flex-direction: column;
  background-color: white;
}

.footer_links {
  width: 100%;
  max-width: 90%;
  margin: auto;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #2f3336;
  border-bottom: 1px solid rgb(221, 219, 219);
  flex-wrap: wrap;
}
.footer_links .footer_link {
  width: 16.66%;
  padding: 40px 0;
  cursor: pointer;
  font-size: 17px;
  text-align: center;
}
.footer_description {
  width: 100%;
  max-width: 66.66%;
  margin: 10px auto;
  padding: 5px;
  color: #2f3336;
  /* font-size: 15px; */
  line-height: 2;
  text-align: justify;
}

.footer-copy {
  background-color: #57baf3;
  padding: 20px 0;
  text-align: center;
  color: hsla(0, 0%, 100%, 0.6);
  margin-top: 3rem;
}
.footer-copy a {
  cursor: pointer;
}

@media only screen and (max-width: 800px) {
  .footer_links {
    max-width: 100%;
    justify-content: center;
    align-items: center;
  }
  .footer_links .footer_link {
    width: 33.33%;
  }
  .footer_description {
    max-width: 90%;
  }
}
</style>