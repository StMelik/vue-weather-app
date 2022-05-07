<template>
  <div class="container">
    <router-view/>
  </div>
</template>

<style>
@import url('./assets/fonts/fonts.css');
* {
  box-sizing: border-box;
}

body {
  font-family: Montserrat, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-color: #111111;
  line-height: 1.22;
}

.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
}

body,
h1,
h2, 
p {
  margin: 0;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

button {
  border: none;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
  display: block;
}

img {
  width: 100%;
  display: block;
}

</style>
