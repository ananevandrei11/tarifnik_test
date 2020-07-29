<template>
  <div id="app">
    <header class="header">
      <Nav />
    </header>
    <main>
      <Order />
      <Tarifs />
    </main>
  </div>
</template>

<script>
import Nav from "./components/Nav";
import Order from "./views/Order";
import Tarifs from "./views/Tarifs";

  export default {
  name: "app",
  components: {
    Nav,
    Order,
    Tarifs
  }
};
</script>

