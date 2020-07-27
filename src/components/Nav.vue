<template>
  <nav class="header-nav">
    <figure class="header-logo">
      <img :src="svgLogo" alt="logo" @click="routToHome()">
    </figure>

    <ul class="header-menu header-menu__list" v-if="showMenu" @mouseleave="closeMenu()">
      <li class="header-menu__item">
        Домашний интернет
        <ul class="header-submenu">
          <li class="header-submenu__item">Для модема</li>
          <li class="header-submenu__item">Для дачи и дома</li>
          <li class="header-submenu__item">Для смартфонов</li>
        </ul>
      </li>
      <li class="header-menu__item">Интернет и ТВ</li>
      <li class="header-menu__item">Телевидение</li>
    </ul>
    <button class="header-btn__menu" v-if="!showMenu" @click="openMenu()">
      <img :src="iconMenu" alt="button for adaptive menu"/>
    </button>

    <button class="header-btn" @click="doCall()">
      <a href="tel:+88001111111" v-if="showPhone">8 800 111 11 11</a>
      <a href="tel:+88001111111" v-if="!showPhone"><img :src="svgPhone" alt="logo"></a>
    </button>
  </nav>
</template>

<script>
import Logo from "@/assets/images/logo.svg";
import IconTel from "@/assets/images/phone.svg";
import IconMenu from "@/assets/images/icon-menu.png";

export default {
  name: "Nav",
  props: {
  },
  data: () => {
    return {
      svgLogo: Logo,
      svgPhone: IconTel,
      iconMenu: IconMenu,
      sizeScreen: null,
      showPhone: true,
      showMenu: true,
    }
  },
  methods: {
    routToHome() {
      this.$router.push("/");
    },
    doCall() {
      let btn = document.querySelector(".header-btn")
      let linkBtn = btn.querySelector("a");
      linkBtn.click();
    },
    updateEl() {
      this.sizeScreen = document.documentElement.clientWidth;
      if (this.sizeScreen < 960) {
          this.showPhone = false;
          this.showMenu = false;
      } else {
        this.showPhone = true;
        this.showMenu = true;
      }
    },
    openMenu() {
      this.showMenu = !this.showMenu;
    },
    closeMenu() {
      if (document.documentElement.clientWidth > 960) {
        return false;
      } else {
        this.showMenu = !this.showMenu;
      }
    }
  },
  created() {
    this.updateEl();
    window.addEventListener("resize", this.updateEl);
  },
};
</script>
