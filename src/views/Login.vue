<template>
  <form class="info-container">
    <div class="txt-field">
      <input type="text" required />
      <label for="">نام کاربری</label>
      <span></span>
    </div>
    <div class="txt-field">
      <input type="text" required />
      <label for="">رمز عبور</label>
      <span></span>
    </div>
    <button type="button" class="btn">ارسال</button>
  </form>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style scoped>
.info-container {
  background-color: white;
  max-width: 600px;
  margin: 5% auto;
  padding: 30px 20px;
  box-shadow: 0 0 10px 1px rgb(139, 139, 139);
  border-radius: 10px;
}
.txt-field {
  display: flex;
  flex-direction: column;
  position: relative;
  border-bottom: 2px solid silver;
  margin-bottom: 40px;
}
.txt-field input {
  font-size: 18px;
  color: rgb(121, 121, 121);
  font-weight: 500;
  border: none;
  outline: none;
  background: transparent;
  border-radius: 5px;
  padding: 10px;
}
.txt-field label {
  position: absolute;
  top: 30%;
  margin-left: 10px;
  pointer-events: none;
  color: #adadad;
  font-size: 18px;
  font-weight: 400;
  transition: 0.5s;
}
.txt-field input:focus ~ label,
.txt-field input:valid ~ label {
  top: -15px;
  color: #2691d9;
}
.txt-field span::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  background-color: #2691d9;
  bottom: -2px;
  left: 0;
  transition: 0.5s;
}
.txt-field input:focus ~ span::after,
.txt-field input:valid ~ span::after {
  width: 100%;
}
.btn {
  outline: 0;
  border: none;
  background-color: rgb(29, 152, 201);
  padding: 10px 20px;
  color: white;
  font-size: 20px;
  font-weight: 400;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s;
}
.btn:hover {
  transform: scale(1.05);
}
</style>