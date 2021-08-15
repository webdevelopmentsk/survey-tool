<template>
  <div id="nav">
    <router-link to="/">Design-1</router-link>
    <router-link to="/design-two">Design-2</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display:flex;
  flex-direction: column;
  align-items: center;
}

#nav {
  padding: 30px;
  display: flex;
  width: 50%;
  justify-content: space-between;

  @media(max-width: 767px) {
     width: 60%;
  }

  a {
    font-weight: bold;
    color: grey;
    font-size: 2rem;

    @media(max-width: 767px) {
     font-size: 1.5rem;
    }

    &.router-link-exact-active {
      color: blue;
    }
  }
}
</style>
