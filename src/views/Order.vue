<template>
  <section id="order" class="order">
    <form action class="order-form" @submit="formSubmit">
      <h3>Заявка на подключение</h3>
      <div class="order-form__type">
        <div>
          <input
          type="radio"
          name="type_conect"
          value="flat"
          id="flat"
          v-model="dataUser.flat"
        />
          <label for="flat">В квартиру</label>
        </div>
        <div>
          <input
            type="radio"
            name="type_conect"
            value="office"
            id="office"
            v-model="dataUser.office"
          />
          <label for="office">В частный дом/офис</label>
        </div>
      </div>
      <div class="order-form__data">
        <div>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Ваш телефон*"
            minlength="11"
            maxlength="11"
            required
            v-model="dataUser.phone"
          />
        </div>
        <div>
          <input
          type="text"
          name="name"
          id="name"
          placeholder="Ваш имя"
          minlength="2"
          maxlength="80"
          v-model="dataUser.name"
        />
        </div>
        <div>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Адрес подключения"
            minlength="2"
            maxlength="255"
            v-model="dataUser.address"
          />
        </div>
      </div>
      <p>Поля, отмеченные *, обязательны к заполнению</p>
      <div>
        <button>Отправить заявку</button>
      </div>
    </form>
  </section>
</template>

<script>

export default {
  name: "order",
  data: () => {
    return {
      dataUser: {
        flat: "",
        office: "",
        phone: "",
        name: "",
        address: ""
      },
      newUser: [],
    };
  },
  methods: {
    formSubmit(e) {
      e.preventDefault();
        let newClient = {
              phone: this.dataUser.phone,
              name: this.dataUser.name,
              address: this.dataUser.address,
        };
        fetch('https://tarifnik.ru/rabota/api/order_controller', {
          method: 'POST',
          body: JSON.stringify(newClient),
        })
        .then((response) => {
          console.log(response);
          this.newUser.push(this.dataUser);
          console.log(this.newUser);
        })
        .catch(error => {
          console.log(error);
        })
    }
  }
};
</script>
