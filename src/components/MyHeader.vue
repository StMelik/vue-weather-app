<template>
  <header class="header">
    <img class="header__logo" src="@/assets/images/logo.svg" alt="">
    <h1 class="header__title">Vue weather</h1>
    <button class="header__button"></button>
    <select name="city" id="city" class="header__select">
      <option value="" disabled selected>Выбрать город</option>
    </select>
  </header>
</template>

<script>
export default {}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  margin-bottom: 10px;
  column-gap: 20px;
}

.header__logo {
  max-width: 65px;
}

.header__title {
  font-size: 25px;
  font-weight: 700;
  color: #4793FF;
  text-transform: uppercase;
}

.header__button {
  margin-left: auto;
  width: 35px;
  height: 35px;
  background-image: url('@/assets/images/invert-colors.svg');
  background-repeat: no-repeat;
  background-position: center;

}

.header__select {
  padding: 10px 45px 10px 20px;
  background-color: #4F4F4F;
  border-radius: 10px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
}
</style>