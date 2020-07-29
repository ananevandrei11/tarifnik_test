<template>
  <section id="order" class="order">
    <form action class="order-form">
        <h3>Заявка на подключение</h3>
        <div class="order-form__type">
          <div>
            <input type="radio" name="type_conect" value="flat" id="flat" />
            <label for="flat">В квартиру</label>
          </div>
          <div>
            <input type="radio" name="type_conect" value="office" id="office" />
            <label for="office">В частный дом/офис</label>
          </div>
        </div>
        <div class="order-form__data">
          <div>
            <input type="tel" name="tel" id="tel" placeholder="Ваш телефон*">
          </div>
          <div>
            <input type="text" name="fullname" id="fullname" placeholder="Ваш имя">
          </div>
          <div>
            <input type="text" name="adress" id="adress" placeholder="Адрес подключения">
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
  name: "order"
};
</script>
