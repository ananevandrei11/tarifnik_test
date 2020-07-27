<template>
  <div id="app">
    <header class="header">
      <Nav />
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      asdsa
    </footer>
  </div>
</template>

<script>
import Nav from "./components/Nav";
  export default {
  name: "app",
  components: {
    Nav
  }
};
</script>

