<template>
  <section id="tarifs" class="tarifs">
    <div class="container">
      <article class="tarifs-item" v-for="tarif in TARIFS" :key="tarif.index">
        <h3>{{ tarif.name }}</h3>
        <div class="tarifs-info">
          <figure>
            <p>
              <img :src="logoSpeed" alt="logo for speed of internet">
            </p>
            <figcaption>До {{ tarif.speed }} Мбит/с</figcaption>
          </figure>
          <figure>
            <p>
              <img :src="logoTV" alt="logo for TV">
            </p>
            <figcaption>
              {{ tarif.channels_count }} каналов
              <br/>
              {{ tarif.hd_channels_count }}HD
            </figcaption>
          </figure>
        </div>
        <div class="tarifs-btn">
          <div class="tarifs-cost">
            <p>{{ tarif.price }}</p>
            <p>
                <span>руб.</span>
                <span>мес.</span>
            </p>
          </div>
          <button>
            Подключить
          </button>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import iconWebGray from "@/assets/images/iconWebGray.svg";
import iconTVGray from "@/assets/images/iconTVGray.svg";
import {mapActions, mapGetters} from "vuex";

export default { 
  name: "Tarifs",
  data: () => {
    return {
      logoSpeed: iconWebGray,
      logoTV: iconTVGray,
    }
  },
  computed: {
    ...mapGetters([
      "TARIFS"
    ])
  },
  methods: {
    ...mapActions([
      "GET_TARIFS_FROM_API"
    ])
  },
  mounted() {
    this.GET_TARIFS_FROM_API();
  }
};
</script>
