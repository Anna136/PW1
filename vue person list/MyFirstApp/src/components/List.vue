<template>
  <ul class="list">
    <li
      @click="$emit('input', item)"
      :key="index"
      v-for="(item, index) in list"
    >
      {{ item.name }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "CList",

  props: {
    list: {
      type: Array,
    },
  },
};
</script>

<style scoped>
.list {
  width: 50%;
  list-style-type: none;
}

ul {
  padding: 12px;
  color: hsla(160, 100%, 37%, 1);
}

li {
  cursor: pointer;
}
@media (hover: hover) {
  li:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
    font-size: 20px;
    list-style-image: url(D:\универ\Cononova Ana MI41z\сем 2\PW1\vue-personList\pw1-2022-vue-is-mi\MyFirstApp\src\assets\logo.svg);
  }
}
</style>
