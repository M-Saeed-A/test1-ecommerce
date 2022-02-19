<template>
  <div class="container">
    <h1>صفحه ای یافت نشد</h1>
    <router-link :to="{ name: 'Home' }" class="btn"
      >برگشت به صفحه اصلی</router-link
    >
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
.container {
  background: white;
  box-shadow: 0 0 10px rgb(148, 148, 148);
  padding: 15px;
  border-radius: 10px;
  margin: 5rem auto;
  max-width: 600px;
  text-align: center;
}
.container h1 {
  color: rgb(94, 94, 94);
  font-weight: 500;
  margin-bottom: 20px;
}

.container .btn {
  outline: 0;
  border: none;
  background-color: rgb(29, 152, 201);
  padding: 10px;
  color: white;
  font-size: 20px;
  font-weight: 400;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s;
  font-size: 17px;
}
.btn:hover {
  transform: scale(1.05);
}
</style>