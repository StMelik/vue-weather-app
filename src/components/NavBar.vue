<template>
  <nav class="nav">
    <button class="nav__button nav__button_active">На неделю</button>
    <button disabled class="nav__button disabled-button">На месяц</button>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav {
  display: flex;
  column-gap: 15px;
  margin-bottom: 10px;
}

.nav__button {
  color: inherit;
  font-size: 18px;
  padding: 10px 20px;
  background-color: #4F4F4F;
  box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
  border-radius: 5px;
  transition: all .3s;
}

.nav__button_active {
  background-color: #4793FF;
}

.nav__button:not(.nav__button_active):hover {
  opacity: .5;
}
</style>